import { Activity } from 'lucide-react'

const Logo = (props: any) => {
  return (
    <div className="pulse-logo" style={{ display: 'flex', alignItems: 'center', gap: '12px', fontFamily: 'Inter, sans-serif' }}>
        <Activity className="pulse-mark" size={24} color="#3B82F6" strokeWidth={3} />
        <span style={{ 
          fontWeight: 'bold', 
          fontSize: '1.1rem', 
          whiteSpace: 'nowrap',
          color: 'inherit' 
        }}>
          PulseQuik Admin
        </span>
    </div>
  )
}

export default Logo
