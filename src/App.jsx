import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ExperimentList from './components/ExperimentList';
import ExperimentDetails from './components/ExperimentDetails';
import SubExperimentDetails from './components/SubExperimentDetails';
import ModulesView from './components/ModulesView';
import ToolsView from './components/ToolsView';
import CodeEditorPage from './components/CodeEditorPage';
import StudentProfilePage from './components/StudentProfilePage';

import EditStudentModal from './components/EditStudentModal';
import AddExperimentModal from './components/AddExperimentModal';
import EditExperimentModal from './components/EditExperimentModal';
import SubExperimentModal from './components/SubExperimentModal';
import ConfirmDialog from './components/ConfirmDialog';

import { defaultStudent, defaultExperiments } from './data/defaultData';
import { loadStorage, saveStorage } from './utils/storage';

const APP_VERSION = 'v3.0-only-exp6';

export default function App() {
  // Clear old cached experiments to enforce only Experiment 6
  useEffect(() => {
    const storedVersion = localStorage.getItem('ds_lab_version');
    if (storedVersion !== APP_VERSION) {
      localStorage.setItem('ds_lab_version', APP_VERSION);
      saveStorage('ds_lab_experiments', defaultExperiments);
      setExperiments(defaultExperiments);
    }
  }, []);

  // 1. Persistent Student State
  const [student, setStudent] = useState(() => {
    return loadStorage('ds_lab_student', defaultStudent);
  });

  // 2. Persistent Experiments State (Enforce Only Experiment 6)
  const [experiments, setExperiments] = useState(() => {
    const storedVersion = localStorage.getItem('ds_lab_version');
    if (storedVersion !== APP_VERSION) {
      saveStorage('ds_lab_experiments', defaultExperiments);
      localStorage.setItem('ds_lab_version', APP_VERSION);
      return defaultExperiments;
    }
    const saved = loadStorage('ds_lab_experiments', null);
    if (saved && Array.isArray(saved) && saved.length === 1 && (saved[0].id === 'exp-6' || saved[0].number === '6')) {
      return saved;
    }
    saveStorage('ds_lab_experiments', defaultExperiments);
    return defaultExperiments;
  });

  // 3. Main Navigation Tab: 'experiments' | 'modules' | 'tools' | 'editor' | 'profile'
  const [activeNavTab, setActiveNavTab] = useState('experiments');

  // 4. Experiment Drill-down View: 'home' | 'experiment-details' | 'sub-experiment-details'
  const [currentView, setCurrentView] = useState('home');
  const [selectedExperiment, setSelectedExperiment] = useState(null);
  const [selectedSubExperiment, setSelectedSubExperiment] = useState(null);

  // 5. Search State
  const [searchTerm, setSearchTerm] = useState('');

  // 6. Interactive Code Editor custom code buffer
  const [editorCustomCode, setEditorCustomCode] = useState(null);
  const [editorCustomFilename, setEditorCustomFilename] = useState(null);

  const handleOpenCodeInEditor = (codeSnippet, filename) => {
    setEditorCustomCode(codeSnippet);
    if (filename) setEditorCustomFilename(filename);
    setActiveNavTab('editor');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 7. Modal States
  const [isEditStudentOpen, setIsEditStudentOpen] = useState(false);
  const [isAddExpOpen, setIsAddExpOpen] = useState(false);
  const [editingExperiment, setEditingExperiment] = useState(null);
  const [deletingExperiment, setDeletingExperiment] = useState(null);

  // Sub-Experiment Preview Modal (Exp A / Exp B)
  const [subModalConfig, setSubModalConfig] = useState({
    isOpen: false,
    parentExperiment: null,
    subExperiment: null
  });

  // Persist Student changes
  const handleSaveStudent = (updatedStudent) => {
    setStudent(updatedStudent);
    saveStorage('ds_lab_student', updatedStudent);
  };

  // Persist Experiments changes
  const handleSaveExperiments = (newExperiments) => {
    setExperiments(newExperiments);
    saveStorage('ds_lab_experiments', newExperiments);
  };

  // Add new experiment
  const handleAddExperiment = (newExp) => {
    const updated = [...experiments, newExp];
    handleSaveExperiments(updated);
  };

  // Edit existing experiment
  const handleUpdateExperiment = (updatedExp) => {
    const updated = experiments.map((exp) => (exp.id === updatedExp.id ? updatedExp : exp));
    handleSaveExperiments(updated);
    if (selectedExperiment && selectedExperiment.id === updatedExp.id) {
      setSelectedExperiment(updatedExp);
      if (selectedSubExperiment) {
        const refreshedSub = updatedExp.subExperiments?.find(
          (s) => s.id === selectedSubExperiment.id || s.letter === selectedSubExperiment.letter
        );
        if (refreshedSub) {
          setSelectedSubExperiment(refreshedSub);
        }
      }
    }
  };

  // Delete experiment
  const handleDeleteExperiment = () => {
    if (!deletingExperiment) return;
    const updated = experiments.filter((exp) => exp.id !== deletingExperiment.id);
    handleSaveExperiments(updated);
    setDeletingExperiment(null);
    if (selectedExperiment && selectedExperiment.id === deletingExperiment.id) {
      setCurrentView('home');
      setSelectedExperiment(null);
      setSelectedSubExperiment(null);
    }
  };

  // Navigation handlers
  const handleNavigateToExperiment = (exp) => {
    setActiveNavTab('experiments');
    setSelectedExperiment(exp);
    setCurrentView('experiment-details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToSubDetails = (parentExp, subExp) => {
    setActiveNavTab('experiments');
    setSelectedExperiment(parentExp);
    setSelectedSubExperiment(subExp);
    setCurrentView('sub-experiment-details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenSubModal = (parentExp, subExp) => {
    setSubModalConfig({
      isOpen: true,
      parentExperiment: parentExp,
      subExperiment: subExp
    });
  };

  const handleCloseSubModal = () => {
    setSubModalConfig({
      isOpen: false,
      parentExperiment: null,
      subExperiment: null
    });
  };

  // Switch top tabs
  const handleTabChange = (tabKey) => {
    setActiveNavTab(tabKey);
    if (tabKey === 'experiments' && currentView !== 'home') {
      setCurrentView('home');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Browser back navigation support
  useEffect(() => {
    const handlePopState = () => {
      if (currentView === 'sub-experiment-details') {
        setCurrentView('experiment-details');
      } else if (currentView === 'experiment-details') {
        setCurrentView('home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [currentView]);

  return (
    <div className="ds-lab-app">
      {/* Top Global Navigation Bar with MBU Branding & 5 Page Tabs */}
      <Navbar
        activeTab={activeNavTab}
        onSelectTab={handleTabChange}
        student={student}
        onEditStudent={() => setIsEditStudentOpen(true)}
      />

      <main className="ds-container">
        {/* PAGE 1: EXPERIMENTS VIEW */}
        {activeNavTab === 'experiments' && (
          <>
            {/* Experiments List View (Hero Section Removed per Academic Requirements) */}
            {currentView === 'home' && (
              <ExperimentList
                experiments={experiments}
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                onAddClick={() => setIsAddExpOpen(true)}
                onReadMore={handleNavigateToExperiment}
                onOpenSubExpModal={handleOpenSubModal}
                onEdit={(exp) => setEditingExperiment(exp)}
                onDelete={(exp) => setDeletingExperiment(exp)}
              />
            )}

            {currentView === 'experiment-details' && selectedExperiment && (
              <ExperimentDetails
                experiment={selectedExperiment}
                student={student}
                onEditStudent={() => setIsEditStudentOpen(true)}
                onBack={() => {
                  setCurrentView('home');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onOpenSubExpModal={handleOpenSubModal}
                onOpenSubExpDetails={(sub) => handleNavigateToSubDetails(selectedExperiment, sub)}
                onOpenInEditor={handleOpenCodeInEditor}
                onEdit={(exp) => setEditingExperiment(exp)}
              />
            )}

            {currentView === 'sub-experiment-details' && selectedExperiment && selectedSubExperiment && (
              <SubExperimentDetails
                parentExperiment={selectedExperiment}
                subExperiment={selectedSubExperiment}
                student={student}
                onEditStudent={() => setIsEditStudentOpen(true)}
                onSelectSubExperiment={(sub) => setSelectedSubExperiment(sub)}
                onBackToExperiment={() => {
                  setCurrentView('experiment-details');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onBackToHome={() => {
                  setCurrentView('home');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onOpenInEditor={handleOpenCodeInEditor}
                onEditExperiment={(exp) => setEditingExperiment(exp)}
              />
            )}
          </>
        )}

        {/* PAGE 2: MODULES VIEW */}
        {activeNavTab === 'modules' && (
          <ModulesView 
            experiments={experiments}
            onNavigateToExperiment={handleNavigateToExperiment}
            onNavigateToEditor={handleOpenCodeInEditor}
          />
        )}

        {/* PAGE 3: TOOLS VIEW */}
        {activeNavTab === 'tools' && (
          <ToolsView />
        )}

        {/* PAGE 4: CODE EDITOR PAGE */}
        {activeNavTab === 'editor' && (
          <CodeEditorPage 
            initialCode={editorCustomCode}
            initialFilename={editorCustomFilename}
          />
        )}

        {/* PAGE 5: STUDENT PROFILE PAGE */}
        {activeNavTab === 'profile' && (
          <StudentProfilePage
            student={student}
            onEditStudent={() => setIsEditStudentOpen(true)}
            experiments={experiments}
          />
        )}
      </main>

      {/* GLOBAL MODALS */}
      {/* 1. Edit Student ID Card Modal */}
      <EditStudentModal
        isOpen={isEditStudentOpen}
        onClose={() => setIsEditStudentOpen(false)}
        student={student}
        onSave={handleSaveStudent}
      />

      {/* 2. Add New Experiment Modal */}
      <AddExperimentModal
        isOpen={isAddExpOpen}
        onClose={() => setIsAddExpOpen(false)}
        onSave={handleAddExperiment}
        nextExpNumber={experiments.length + 1}
      />

      {/* 3. Edit Existing Experiment Modal */}
      <EditExperimentModal
        isOpen={Boolean(editingExperiment)}
        onClose={() => setEditingExperiment(null)}
        experiment={editingExperiment}
        onSave={handleUpdateExperiment}
      />

      {/* 4. Sub-Experiment Modal (Exp A / Exp B Preview) */}
      <SubExperimentModal
        isOpen={subModalConfig.isOpen}
        onClose={handleCloseSubModal}
        parentExperiment={subModalConfig.parentExperiment}
        subExperiment={subModalConfig.subExperiment}
        onReadMore={handleNavigateToSubDetails}
      />

      {/* 5. Delete Confirmation Dialog */}
      <ConfirmDialog
        isOpen={Boolean(deletingExperiment)}
        title="Delete Experiment?"
        message={`Are you sure you want to permanently delete "Experiment ${deletingExperiment?.number}: ${deletingExperiment?.title}"? All associated sub-experiments and records will be removed.`}
        onConfirm={handleDeleteExperiment}
        onCancel={() => setDeletingExperiment(null)}
      />
    </div>
  );
}
