'use client'

import { useState, useEffect } from 'react'
import { db } from '@/lib/firebase'
import {
  collection, getDocs, addDoc, updateDoc,
  deleteDoc, doc, orderBy, query,
} from 'firebase/firestore'

const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'ananya2025'

// -----------------------------------------------------------
// Shared styles
// -----------------------------------------------------------
const inputStyle = {
  width: '100%',
  padding: '0.7rem 0.85rem',
  border: '1px solid #D8CFC0',
  backgroundColor: 'var(--offwhite)',
  fontFamily: 'Crimson Text, serif',
  fontSize: '1rem',
  color: 'var(--inkbrown)',
  outline: 'none',
  boxSizing: 'border-box',
  marginBottom: '1rem',
}

const labelStyle = {
  display: 'block',
  fontFamily: 'Crimson Text, serif',
  fontSize: '0.78rem',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'var(--stone)',
  marginBottom: '0.35rem',
}

const buttonPrimary = {
  padding: '0.75rem 1.6rem',
  backgroundColor: 'var(--turmeric)',
  color: 'var(--inkbrown)',
  fontFamily: 'Crimson Text, serif',
  fontSize: '0.95rem',
  fontWeight: 600,
  border: 'none',
  cursor: 'pointer',
  letterSpacing: '0.04em',
}

const buttonSecondary = {
  padding: '0.75rem 1.4rem',
  backgroundColor: 'transparent',
  color: 'var(--stone)',
  fontFamily: 'Crimson Text, serif',
  fontSize: '0.95rem',
  border: '1px solid #D8CFC0',
  cursor: 'pointer',
}

const buttonDanger = {
  padding: '0.4rem 0.85rem',
  backgroundColor: 'transparent',
  color: 'var(--terracotta)',
  fontFamily: 'Crimson Text, serif',
  fontSize: '0.85rem',
  border: '1px solid var(--terracotta)',
  cursor: 'pointer',
}

const buttonEdit = {
  padding: '0.4rem 0.85rem',
  backgroundColor: 'transparent',
  color: 'var(--stone)',
  fontFamily: 'Crimson Text, serif',
  fontSize: '0.85rem',
  border: '1px solid #D8CFC0',
  cursor: 'pointer',
  marginRight: '0.5rem',
}

// -----------------------------------------------------------
// Main admin page
// -----------------------------------------------------------
export default function AdminPage() {
  const [authed, setAuthed] = useState(false)
  const [password, setPassword] = useState('')
  const [activeTab, setActiveTab] = useState('projects')
  const [message, setMessage] = useState('')

  // -----------------------------
  // LOGIN GATE
  // -----------------------------
  if (!authed) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--inkbrown)',
        padding: '2rem',
      }}>
        <div style={{ maxWidth: '400px', width: '100%' }}>
          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '2rem',
            color: 'var(--parchment)',
            marginBottom: '2rem',
            textAlign: 'center',
          }}>
            Admin Panel
          </h1>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                if (password === ADMIN_PASSWORD) setAuthed(true)
                else setMessage('Wrong password')
              }
            }}
            style={{
              width: '100%',
              padding: '0.85rem 1rem',
              backgroundColor: 'rgba(245,237,214,0.08)',
              border: '1px solid rgba(245,237,214,0.2)',
              color: 'var(--parchment)',
              fontFamily: 'Crimson Text, serif',
              fontSize: '1rem',
              marginBottom: '1rem',
              outline: 'none',
              boxSizing: 'border-box',
            }}
          />
          <button
            onClick={() => {
              if (password === ADMIN_PASSWORD) setAuthed(true)
              else setMessage('Wrong password')
            }}
            style={{ ...buttonPrimary, width: '100%' }}
          >
            Enter
          </button>
          {message && (
            <p style={{
              color: '#ff6b6b',
              fontFamily: 'Crimson Text, serif',
              marginTop: '1rem',
              textAlign: 'center',
            }}>
              {message}
            </p>
          )}
        </div>
      </div>
    )
  }

  // -----------------------------
  // ADMIN SHELL
  // -----------------------------
  return (
    <div style={{ backgroundColor: 'var(--offwhite)', minHeight: '100vh', padding: '3rem 2rem' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>

        {/* Top bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '2.2rem',
            color: 'var(--inkbrown)',
          }}>
            Admin Panel
          </h1>
          <a href="/" style={{
            fontFamily: 'Crimson Text, serif',
            fontSize: '0.9rem',
            color: 'var(--stone)',
            textDecoration: 'none',
          }}>
            {'\u2190 Back to site'}
          </a>
        </div>

        {/* Tabs */}
        <div style={{
          display: 'flex',
          gap: '2rem',
          borderBottom: '1px solid #E8DFD0',
          marginBottom: '2.5rem',
        }}>
          {[
            { id: 'projects', label: 'Projects' },
            { id: 'mentions', label: 'Mentions' },
          ].map(tab => {
            const active = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.75rem 0',
                  fontFamily: 'Crimson Text, serif',
                  fontSize: '1rem',
                  color: active ? 'var(--turmeric)' : 'var(--stone)',
                  borderBottom: active ? '2px solid var(--turmeric)' : '2px solid transparent',
                  marginBottom: '-1px',
                }}
              >
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Active tab */}
        {activeTab === 'projects' && <ProjectsAdmin />}
        {activeTab === 'mentions' && <MentionsAdmin />}

      </div>
    </div>
  )
}

// -----------------------------------------------------------
// PROJECTS ADMIN
// -----------------------------------------------------------
function ProjectsAdmin() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [editing, setEditing] = useState(null)
  const [message, setMessage] = useState('')
  const blank = {
    title: '', subtitle: '', description: '',
    status: 'coming_soon', year: '', order: 1, slug: '',
    externalLink: '', thumbnail: '',
  }
  const [form, setForm] = useState(blank)

  async function fetchItems() {
    setLoading(true)
    try {
      const q = query(collection(db, 'projects'), orderBy('order'))
      const snap = await getDocs(q)
      setItems(snap.docs.map(d => ({ id: d.id, ...d.data() })))
    } catch (err) { console.error(err) }
    finally { setLoading(false) }
  }

  useEffect(() => { fetchItems() }, [])

  async function handleSave() {
    if (!form.title.trim()) { setMessage('Title is required.'); return }
    try {
      const payload = { ...form, order: Number(form.order) || 1 }
      if (editing) {
        await updateDoc(doc(db, 'projects', editing), payload)
        setMessage('Project updated.')
      } else {
        await addDoc(collection(db, 'projects'), payload)
        setMessage('Project added.')
      }
      setForm(blank)
      setEditing(null)
      fetchItems()
    } catch (err) { setMessage('Error saving project.'); console.error(err) }
  }

  async function handleDelete(id) {
    if (!confirm('Delete this project?')) return
    await deleteDoc(doc(db, 'projects', id))
    setMessage('Project deleted.')
    fetchItems()
  }

  function handleEdit(item) {
    setEditing(item.id)
    setForm({
      title: item.title || '',
      subtitle: item.subtitle || '',
      description: item.description || '',
      status: item.status || 'coming_soon',
      year: item.year || '',
      order: item.order || 1,
      slug: item.slug || '',
      externalLink: item.externalLink || '',
      thumbnail: item.thumbnail || '',
    })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div>
      {/* FORM */}
      <section style={{
        backgroundColor: '#FAF6EF',
        padding: '2rem',
        border: '1px solid #E8DFD0',
        marginBottom: '2.5rem',
      }}>
        <h2 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '1.6rem',
          color: 'var(--inkbrown)',
          marginBottom: '1.5rem',
        }}>
          {editing ? 'Edit Project' : 'Add New Project'}
        </h2>

        <label style={labelStyle}>Title *</label>
        <input style={inputStyle} value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })}
          placeholder="e.g., Cow Urine Chronicles" />

        <label style={labelStyle}>Subtitle</label>
        <input style={inputStyle} value={form.subtitle}
          onChange={e => setForm({ ...form, subtitle: e.target.value })}
          placeholder="e.g., YouTube discourse & health misinformation" />

        <label style={labelStyle}>Description</label>
        <textarea style={{ ...inputStyle, minHeight: '100px', resize: 'vertical' }}
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })}
          placeholder="A short description of the project." />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '1rem',
        }}>
          <div>
            <label style={labelStyle}>Status</label>
            <select style={inputStyle} value={form.status}
              onChange={e => setForm({ ...form, status: e.target.value })}>
              <option value="active">Active</option>
              <option value="coming_soon">Coming Soon</option>
            </select>
          </div>
          <div>
            <label style={labelStyle}>Year</label>
            <input style={inputStyle} value={form.year}
              onChange={e => setForm({ ...form, year: e.target.value })}
              placeholder="2025" />
          </div>
          <div>
            <label style={labelStyle}>Order</label>
            <input type="number" style={inputStyle} value={form.order}
              onChange={e => setForm({ ...form, order: e.target.value })}
              placeholder="1" />
          </div>
          <div>
            <label style={labelStyle}>Slug</label>
            <input style={inputStyle} value={form.slug}
              onChange={e => setForm({ ...form, slug: e.target.value })}
              placeholder="gomutra" />
          </div>
        </div>

        <label style={labelStyle}>External Link (optional)</label>
        <input style={inputStyle} value={form.externalLink}
          onChange={e => setForm({ ...form, externalLink: e.target.value })}
          placeholder="https://example.com/project (use if not hosted on this site)" />

        <label style={labelStyle}>Thumbnail Path (optional)</label>
        <input style={inputStyle} value={form.thumbnail}
          onChange={e => setForm({ ...form, thumbnail: e.target.value })}
          placeholder="/images/asha-thumb.png" />

        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
          <button onClick={handleSave} style={buttonPrimary}>
            {editing ? 'Update Project' : 'Add Project'}
          </button>
          {editing && (
            <button
              onClick={() => { setEditing(null); setForm(blank); setMessage('') }}
              style={buttonSecondary}
            >
              Cancel
            </button>
          )}
        </div>

        {message && (
          <p style={{
            marginTop: '1rem',
            fontFamily: 'Crimson Text, serif',
            color: message.toLowerCase().includes('error') ? '#c0392b' : 'var(--sage)',
          }}>
            {message}
          </p>
        )}
      </section>

      {/* LIST */}
      <section>
        <h2 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '1.6rem',
          color: 'var(--inkbrown)',
          marginBottom: '1.5rem',
        }}>
          All Projects
        </h2>
        {loading ? (
          <p style={{ color: 'var(--stone)', fontStyle: 'italic' }}>Loading...</p>
        ) : items.length === 0 ? (
          <p style={{ color: 'var(--stone)', fontStyle: 'italic' }}>No projects yet.</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {items.map(item => (
              <div key={item.id} style={{
                padding: '1.5rem',
                border: '1px solid #E8DFD0',
                backgroundColor: 'var(--offwhite)',
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: '1rem',
                alignItems: 'center',
              }}>
                <div>
                  <p style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.25rem',
                    color: 'var(--inkbrown)',
                    marginBottom: '0.25rem',
                  }}>
                    {item.title}
                  </p>
                  <p style={{
                    fontFamily: 'Crimson Text, serif',
                    fontSize: '0.85rem',
                    color: 'var(--stone)',
                  }}>
                    {item.status === 'active' ? 'Active' : 'Coming Soon'} {' \u00B7 '}
                    Order {item.order} {' \u00B7 '}
                    {item.year || '\u2014'}
                  </p>
                </div>
                <div style={{ display: 'flex' }}>
                  <button onClick={() => handleEdit(item)} style={buttonEdit}>Edit</button>
                  <button onClick={() => handleDelete(item.id)} style={buttonDanger}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

// -----------------------------------------------------------
// MENTIONS ADMIN
// -----------------------------------------------------------
function MentionsAdmin() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [editing, setEditing] = useState(null)
  const [message, setMessage] = useState('')
  const blank = {
    type: 'Talk', title: '', platform: '', date: '',
    link: '', note: '', order: 1,
  }
  const [form, setForm] = useState(blank)

  async function fetchItems() {
    setLoading(true)
    try {
      const q = query(collection(db, 'mentions'), orderBy('order'))
      const snap = await getDocs(q)
      setItems(snap.docs.map(d => ({ id: d.id, ...d.data() })))
    } catch (err) { console.error(err) }
    finally { setLoading(false) }
  }

  useEffect(() => { fetchItems() }, [])

  async function handleSave() {
    if (!form.title.trim()) { setMessage('Title is required.'); return }
    try {
      const payload = { ...form, order: Number(form.order) || 1 }
      if (editing) {
        await updateDoc(doc(db, 'mentions', editing), payload)
        setMessage('Mention updated.')
      } else {
        await addDoc(collection(db, 'mentions'), payload)
        setMessage('Mention added.')
      }
      setForm(blank)
      setEditing(null)
      fetchItems()
    } catch (err) { setMessage('Error saving mention.'); console.error(err) }
  }

  async function handleDelete(id) {
    if (!confirm('Delete this mention?')) return
    await deleteDoc(doc(db, 'mentions', id))
    setMessage('Mention deleted.')
    fetchItems()
  }

  function handleEdit(item) {
    setEditing(item.id)
    setForm({
      type: item.type || 'Talk',
      title: item.title || '',
      platform: item.platform || '',
      date: item.date || '',
      link: item.link || '',
      note: item.note || '',
      order: item.order || 1,
    })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div>
      {/* FORM */}
      <section style={{
        backgroundColor: '#FAF6EF',
        padding: '2rem',
        border: '1px solid #E8DFD0',
        marginBottom: '2.5rem',
      }}>
        <h2 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '1.6rem',
          color: 'var(--inkbrown)',
          marginBottom: '1.5rem',
        }}>
          {editing ? 'Edit Mention' : 'Add New Mention'}
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '1rem',
        }}>
          <div>
            <label style={labelStyle}>Type</label>
            <select style={inputStyle} value={form.type}
              onChange={e => setForm({ ...form, type: e.target.value })}>
              <option value="Talk">Talk</option>
              <option value="Featured In">Featured In</option>
              <option value="Paper">Paper</option>
              <option value="Article">Article</option>
              <option value="Interview">Interview</option>
            </select>
          </div>
          <div>
            <label style={labelStyle}>Order</label>
            <input type="number" style={inputStyle} value={form.order}
              onChange={e => setForm({ ...form, order: e.target.value })}
              placeholder="1" />
          </div>
        </div>

        <label style={labelStyle}>Title *</label>
        <input style={inputStyle} value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })}
          placeholder="Title of the talk or paper" />

        <label style={labelStyle}>Platform / Venue</label>
        <input style={inputStyle} value={form.platform}
          onChange={e => setForm({ ...form, platform: e.target.value })}
          placeholder="e.g., Microsoft Research Bangalore" />

        <label style={labelStyle}>Date</label>
        <input style={inputStyle} value={form.date}
          onChange={e => setForm({ ...form, date: e.target.value })}
          placeholder="e.g., July 9, 2025" />

        <label style={labelStyle}>Link (optional)</label>
        <input style={inputStyle} value={form.link}
          onChange={e => setForm({ ...form, link: e.target.value })}
          placeholder="https://link-to-recording-or-paper.com" />

        <label style={labelStyle}>Note / Abstract</label>
        <textarea style={{ ...inputStyle, minHeight: '120px', resize: 'vertical' }}
          value={form.note}
          onChange={e => setForm({ ...form, note: e.target.value })}
          placeholder="A short description of the talk or paper." />

        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
          <button onClick={handleSave} style={buttonPrimary}>
            {editing ? 'Update Mention' : 'Add Mention'}
          </button>
          {editing && (
            <button
              onClick={() => { setEditing(null); setForm(blank); setMessage('') }}
              style={buttonSecondary}
            >
              Cancel
            </button>
          )}
        </div>

        {message && (
          <p style={{
            marginTop: '1rem',
            fontFamily: 'Crimson Text, serif',
            color: message.toLowerCase().includes('error') ? '#c0392b' : 'var(--sage)',
          }}>
            {message}
          </p>
        )}
      </section>

      {/* LIST */}
      <section>
        <h2 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '1.6rem',
          color: 'var(--inkbrown)',
          marginBottom: '1.5rem',
        }}>
          All Mentions
        </h2>
        {loading ? (
          <p style={{ color: 'var(--stone)', fontStyle: 'italic' }}>Loading...</p>
        ) : items.length === 0 ? (
          <p style={{ color: 'var(--stone)', fontStyle: 'italic' }}>No mentions yet.</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {items.map(item => (
              <div key={item.id} style={{
                padding: '1.5rem',
                border: '1px solid #E8DFD0',
                backgroundColor: 'var(--offwhite)',
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: '1rem',
                alignItems: 'center',
              }}>
                <div>
                  <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', marginBottom: '0.4rem' }}>
                    <span style={{
                      fontFamily: 'Crimson Text, serif',
                      fontSize: '0.7rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--offwhite)',
                      backgroundColor: item.type === 'Paper' ? 'var(--inkbrown)' : 'var(--terracotta)',
                      padding: '0.15rem 0.55rem',
                    }}>
                      {item.type}
                    </span>
                    <span style={{
                      fontFamily: 'Crimson Text, serif',
                      fontSize: '0.85rem',
                      color: 'var(--stone)',
                    }}>
                      {item.date || '\u2014'} {' \u00B7 '} Order {item.order}
                    </span>
                  </div>
                  <p style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.1rem',
                    color: 'var(--inkbrown)',
                    lineHeight: 1.3,
                  }}>
                    {item.title}
                  </p>
                  <p style={{
                    fontFamily: 'Crimson Text, serif',
                    fontSize: '0.85rem',
                    color: 'var(--stone)',
                    marginTop: '0.3rem',
                  }}>
                    {item.platform}
                  </p>
                </div>
                <div style={{ display: 'flex' }}>
                  <button onClick={() => handleEdit(item)} style={buttonEdit}>Edit</button>
                  <button onClick={() => handleDelete(item.id)} style={buttonDanger}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
