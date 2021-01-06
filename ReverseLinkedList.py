class ReverseLinkedList:
	def reverseList(self, startNode):
		currentNode = startNode
		prevNode = None
		while currentNode is not None:
			
			nextNode = currentNode.next
			currentNode.next = prevNode
			
			prevNode = currentNode
			currentNode = nextNode
		return prevNode
