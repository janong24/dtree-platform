export interface DecisionTreeNode {
  id: string
  type: 'question' | 'recommendation'
  data: QuestionNodeData | RecommendationNodeData
}

export interface QuestionNodeData {
  question: string
  answers: Answer[]
}

export interface Answer {
  text: string
  nextNodeId: string
}

export interface RecommendationNodeData {
  recommendation: string
  confidence: number
  alternatives?: string[]
  reasoning: string
}

export interface DecisionTree {
  id: string
  title: string
  description: string
  startNodeId: string
  nodes: DecisionTreeNode[]
}