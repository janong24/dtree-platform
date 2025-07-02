import { Node, Edge } from 'reactflow'

export interface CustomNodeData {
  label: string
  nodeData: any
  isActive?: boolean
  isCompleted?: boolean
}

export type CustomNode = Node<CustomNodeData>
export type CustomEdge = Edge