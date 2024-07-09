import ContextMenu from './components/contextMenuWrapper/ContextMenu'

function App() {
  const items = [
    {
      label: 'First Action',
      action: () => {
        console.log('First Action Triggered')
      },
    },
    {
      label: 'Second Action',
      action: () => {
        console.log('Second Action Triggered')
      },
    },
    {
      label: 'Third Action',
      action: () => {
        console.log('Third Action Triggered')
      },
    },
  ]
  return (
    <div className="flex h-screen w-full place-content-center place-items-center">
      <ContextMenu items={items}>
        <div className="p-2 rounded-md shadow-md">Right Click</div>
      </ContextMenu>
    </div>
  )
}

export default App
