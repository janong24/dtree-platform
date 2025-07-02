import { useState, useEffect } from 'react'
import { loadTreeContent } from '../utils/contentLoader'
import { DecisionTree } from '../types/DecisionTree'
import { SidebarContent } from '../types/Sidebar'

export const useDecisionTree = (treeId: string) => {
  const [treeData, setTreeData] = useState<DecisionTree | null>(null)
  const [sidebarData, setSidebarData] = useState<SidebarContent | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  
  useEffect(() => {
    const loadContent = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const content = await loadTreeContent(treeId)
        setTreeData(content.treeData)
        setSidebarData(content.sidebarData)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        setLoading(false)
      }
    }
    
    if (treeId) {
      loadContent()
    }
  }, [treeId])
  
  return { treeData, sidebarData, loading, error }
}