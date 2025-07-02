import React from 'react'
import { useDecisionTree } from './hooks/useDecisionTree'

function App() {
  const { treeData, sidebarData, loading, error } = useDecisionTree('programming-language-selection')
  
  if (loading) return <div className="p-8">Loading...</div>
  if (error) return <div className="p-8 text-red-600">Error: {error}</div>
  if (!treeData) return <div className="p-8">No data</div>
  
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{treeData.title}</h1>
      <p className="text-gray-600 mb-6">{treeData.description}</p>
      
      <div className="bg-gray-100 p-4 rounded">
        <h2 className="font-semibold mb-2">Tree loaded successfully with Vite! 🚀</h2>
        <p>Nodes: {treeData.nodes.length}</p>
        <p>Sidebar entries: {sidebarData ? Object.keys(sidebarData).length : 0}</p>
      </div>
    </div>
  )
}

export default App