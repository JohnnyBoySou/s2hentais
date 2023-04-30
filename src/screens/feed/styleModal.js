export const styleModal = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        transform: "translateX(-100px)",
        transition: "linear 500ms ease-in-out",
      },
      content: {
        position: 'absolute',
        top: '20px',
        margin: 'auto',
        width: '500px',
        bottom: '20px',
        border: '2px solid #00000020',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        transition: "linear 500ms ease-in-out",
        borderRadius: '12px',
        outline: 'none',
        padding: '0px 0px 0px 0px',
        zIndex: 999,
      }
}