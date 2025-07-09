export default function FloatingParticles() {
  return (
    <>
      {/* Large visible test particles first */}
      <div 
        style={{
          position: 'fixed',
          top: '10%',
          left: '10%',
          width: '10px',
          height: '10px',
          backgroundColor: '#3B82F6',
          borderRadius: '50%',
          zIndex: 9999,
          pointerEvents: 'none',
          animation: 'pulse 2s infinite'
        }}
      />
      <div 
        style={{
          position: 'fixed',
          top: '20%',
          right: '10%',
          width: '8px',
          height: '8px',
          backgroundColor: '#F59E0B',
          borderRadius: '50%',
          zIndex: 9999,
          pointerEvents: 'none',
          animation: 'pulse 2s infinite 0.5s'
        }}
      />
      <div 
        style={{
          position: 'fixed',
          top: '30%',
          left: '50%',
          width: '6px',
          height: '6px',
          backgroundColor: '#10B981',
          borderRadius: '50%',
          zIndex: 9999,
          pointerEvents: 'none',
          animation: 'pulse 2s infinite 1s'
        }}
      />
      <div 
        style={{
          position: 'fixed',
          bottom: '20%',
          left: '20%',
          width: '8px',
          height: '8px',
          backgroundColor: '#EF4444',
          borderRadius: '50%',
          zIndex: 9999,
          pointerEvents: 'none',
          animation: 'pulse 2s infinite 1.5s'
        }}
      />
      <div 
        style={{
          position: 'fixed',
          bottom: '30%',
          right: '20%',
          width: '6px',
          height: '6px',
          backgroundColor: '#8B5CF6',
          borderRadius: '50%',
          zIndex: 9999,
          pointerEvents: 'none',
          animation: 'pulse 2s infinite 2s'
        }}
      />
      
      {/* More scattered particles */}
      <div style={{ position: 'fixed', top: '15%', left: '25%', width: '4px', height: '4px', backgroundColor: '#3B82F6', borderRadius: '50%', zIndex: 9999, pointerEvents: 'none', animation: 'pulse 3s infinite' }} />
      <div style={{ position: 'fixed', top: '40%', left: '80%', width: '5px', height: '5px', backgroundColor: '#F59E0B', borderRadius: '50%', zIndex: 9999, pointerEvents: 'none', animation: 'pulse 3s infinite 0.5s' }} />
      <div style={{ position: 'fixed', top: '60%', left: '15%', width: '3px', height: '3px', backgroundColor: '#10B981', borderRadius: '50%', zIndex: 9999, pointerEvents: 'none', animation: 'pulse 3s infinite 1s' }} />
      <div style={{ position: 'fixed', top: '80%', left: '70%', width: '4px', height: '4px', backgroundColor: '#EF4444', borderRadius: '50%', zIndex: 9999, pointerEvents: 'none', animation: 'pulse 3s infinite 1.5s' }} />
      <div style={{ position: 'fixed', top: '50%', left: '40%', width: '5px', height: '5px', backgroundColor: '#8B5CF6', borderRadius: '50%', zIndex: 9999, pointerEvents: 'none', animation: 'pulse 3s infinite 2s' }} />
      <div style={{ position: 'fixed', top: '25%', left: '60%', width: '4px', height: '4px', backgroundColor: '#3B82F6', borderRadius: '50%', zIndex: 9999, pointerEvents: 'none', animation: 'pulse 3s infinite 2.5s' }} />
      <div style={{ position: 'fixed', top: '70%', left: '30%', width: '3px', height: '3px', backgroundColor: '#F59E0B', borderRadius: '50%', zIndex: 9999, pointerEvents: 'none', animation: 'pulse 3s infinite 3s' }} />
      <div style={{ position: 'fixed', top: '35%', left: '90%', width: '4px', height: '4px', backgroundColor: '#10B981', borderRadius: '50%', zIndex: 9999, pointerEvents: 'none', animation: 'pulse 3s infinite 3.5s' }} />
      <div style={{ position: 'fixed', top: '90%', left: '50%', width: '5px', height: '5px', backgroundColor: '#EF4444', borderRadius: '50%', zIndex: 9999, pointerEvents: 'none', animation: 'pulse 3s infinite 4s' }} />
      <div style={{ position: 'fixed', top: '45%', left: '10%', width: '3px', height: '3px', backgroundColor: '#8B5CF6', borderRadius: '50%', zIndex: 9999, pointerEvents: 'none', animation: 'pulse 3s infinite 4.5s' }} />
    </>
  );
}