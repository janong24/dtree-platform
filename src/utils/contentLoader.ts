import { config } from '../config/environment'
import { DecisionTree } from '../types/DecisionTree'
import {  SidebarContent } from '../types/Sidebar'

interface TreeData {
  treeData: DecisionTree
  sidebarData: SidebarContent
}

export const loadTreeContent = async (treeId: string): Promise<TreeData> => {
  if (config.isDevelopment && config.useLocalContent) {
    return loadLocalContent(treeId)
  } else {
    return loadRemoteContent(treeId)
  }
}

const loadLocalContent = async (treeId: string): Promise<TreeData> => {
  try {
    const [treeResponse, contentResponse] = await Promise.all([
      fetch(`/data/trees/${treeId}/decision-tree.json`),
      fetch(`/data/trees/${treeId}/sidebar-content.json`)
    ])
    
    if (!treeResponse.ok || !contentResponse.ok) {
      throw new Error(`Failed to load local content for tree: ${treeId}`)
    }
    
    return {
      treeData: await treeResponse.json(),
      sidebarData: await contentResponse.json()
    }
  } catch (error) {
    console.error('Error loading local content:', error)
    throw error
  }
}

const loadRemoteContent = async (treeId: string): Promise<TreeData> => {
  try {
    const headers = {
      'X-API-Key': config.contentApi.apiKey,
      'Content-Type': 'application/json'
    }
    
    const [treeResponse, contentResponse] = await Promise.all([
      fetch(`${config.contentApi.baseUrl}/api/trees/${treeId}/structure`, { headers }),
      fetch(`${config.contentApi.baseUrl}/api/trees/${treeId}/content`, { headers })
    ])
    
    if (!treeResponse.ok || !contentResponse.ok) {
      throw new Error('Failed to load remote content')
    }
    
    return {
      treeData: await treeResponse.json(),
      sidebarData: await contentResponse.json()
    }
  } catch (error) {
    console.error('Error loading remote content:', error)
    throw error
  }
}