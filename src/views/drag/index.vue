<template>
  <el-tree :data="tree.data" node-key="id" default-expand-all @node-drag-start="handleDragStart"
    @node-drag-enter="handleDragEnter" @node-drag-leave="handleDragLeave" @node-drag-over="handleDragOver"
    @node-drag-end="handleDragEnd" @node-drop="handleDrop" draggable :allow-drop="allowDrop" :allow-drag="allowDrag">
  </el-tree>
</template>

<script setup>
import { reactive } from 'vue'

const tree = reactive({
  data: [{
    id: 1,
    label: '一级 1',
    children: [{
      id: 2,
      label: '二级 1-1',
    }, {
      id: 3,
      label: '二级 1-2',
    }]
  }, {
    id: 4,
    label: '一级 2',
    children: [{
      id: 5,
      label: '二级 2-1'
    }, {
      id: 6,
      label: '二级 2-2'
    }]
  }, {
    id: 7,
    label: '一级 3',
    children: [{
      id: 8,
      label: '二级 3-1'
    }, {
      id: 9,
      label: '二级 3-2'
    }]
  }],
  defaultProps: {
    children: 'children',
    label: 'label'
  }
})
function handleDragStart(node, ev) {
  console.log('drag start', node);
}
function handleDragEnter(draggingNode, dropNode, ev) {
  console.log('tree drag enter: ', dropNode.label);
}
function handleDragLeave(draggingNode, dropNode, ev) {
  console.log('tree drag leave: ', dropNode.label);
}
function handleDragOver(draggingNode, dropNode, ev) {
  console.log('tree drag over: ', dropNode.label);
}
function handleDragEnd(draggingNode, dropNode, dropType, ev) {
  console.log('tree drag end: ', dropNode && dropNode.label, dropType);
}
function handleDrop(draggingNode, dropNode, dropType, ev) {
  if (draggingNode.parent !== dropNode.parent) return
  console.log('tree drop: ', dropNode.label, dropType);
}
function allowDrop(draggingNode, dropNode, type) {
  if (type === 'inner' || draggingNode.parent !== dropNode.parent) return

  if (draggingNode.nextSibling === void 0) {
    return type === 'prev'
  } else if (dropNode.nextSibling === void 0) {
    return type === 'next'
  } else if (draggingNode.nextSibling.id !== dropNode.id) {
    return type === 'prev'
  } else {
    return type === 'next'
  }
}
function allowDrag(draggingNode) {
  return true
}
</script>