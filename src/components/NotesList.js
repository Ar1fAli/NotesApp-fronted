import React, { useState, useEffect } from 'react';
import api from '../services/api';
import NoteEditor from './NoteEditor';
import ShareNote from './ShareNote';

const NotesList = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [showShare, setShowShare] = useState(false);
  const [shareNoteId, setShareNoteId] = useState(null);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await api.get('/notes');
      setNotes(response.data);
    } catch (err) {
      console.error('Failed to fetch notes');
    }
  };

  const handleCreate = () => {
    setSelectedNote({ title: '', content: '' });
  };

  const handleSave = async (note) => {
    try {
      if (note.id) {
        await api.put(`/notes/${note.id}`, note);
      } else {
        await api.post('/notes', note);
      }
      fetchNotes();
      setSelectedNote(null);
    } catch (err) {
      console.error('Failed to save note');
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/notes/${id}`);
      fetchNotes();
    } catch (err) {
      console.error('Failed to delete note');
    }
  };

  const handleShare = (id) => {
    setShareNoteId(id);
    setShowShare(true);
  };

  const handleShareSubmit = async (email) => {
    try {
      await api.post(`/notes/${shareNoteId}/share`, { sharedWithEmail: email });
      setShowShare(false);
      alert('Note shared successfully!');
    } catch (err) {
      alert('Failed to share note');
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">My Notes</h2>
        <button
          onClick={handleCreate}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Create Note
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {notes.map((note) => (
          <div key={note.id} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">{note.title}</h3>
            <p className="text-gray-600 mb-4">{note.content.substring(0, 100)}...</p>
            <div className="flex space-x-2">
              <button
                onClick={() => setSelectedNote(note)}
                className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(note.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
              >
                Delete
              </button>
              <button
                onClick={() => handleShare(note.id)}
                className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
              >
                Share
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedNote && (
        <NoteEditor note={selectedNote} onSave={handleSave} onClose={() => setSelectedNote(null)} />
      )}
      {showShare && (
        <ShareNote onSubmit={handleShareSubmit} onClose={() => setShowShare(false)} />
      )}
    </div>
  );
};

export default NotesList;