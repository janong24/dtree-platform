export interface SidebarContent {
  [nodeId: string]: {
    anecdote: string
    explanation: string
    resources: Resource[]
  }
}

export interface Resource {
  title: string
  url: string
  type: 'tutorial' | 'article' | 'documentation' | 'course' | 'guide'
}