import React from 'react';

export default function FloatingParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {/* Blue particles */}
      <div className="absolute w-1 h-1 bg-blue-500 rounded-full animate-pulse" style={{ top: '10%', left: '15%', animationDelay: '0s' }} />
      <div className="absolute w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" style={{ top: '25%', left: '80%', animationDelay: '1s' }} />
      <div className="absolute w-1 h-1 bg-blue-500 rounded-full animate-pulse" style={{ top: '45%', left: '10%', animationDelay: '2s' }} />
      <div className="absolute w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" style={{ top: '65%', left: '90%', animationDelay: '3s' }} />
      <div className="absolute w-1 h-1 bg-blue-500 rounded-full animate-pulse" style={{ top: '80%', left: '25%', animationDelay: '4s' }} />
      
      {/* Orange particles */}
      <div className="absolute w-1 h-1 bg-orange-500 rounded-full animate-pulse" style={{ top: '15%', left: '60%', animationDelay: '0.5s' }} />
      <div className="absolute w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" style={{ top: '35%', left: '20%', animationDelay: '1.5s' }} />
      <div className="absolute w-1 h-1 bg-orange-500 rounded-full animate-pulse" style={{ top: '55%', left: '75%', animationDelay: '2.5s' }} />
      <div className="absolute w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" style={{ top: '75%', left: '5%', animationDelay: '3.5s' }} />
      <div className="absolute w-1 h-1 bg-orange-500 rounded-full animate-pulse" style={{ top: '90%', left: '85%', animationDelay: '4.5s' }} />
      
      {/* Green particles */}
      <div className="absolute w-1 h-1 bg-green-500 rounded-full animate-pulse" style={{ top: '20%', left: '40%', animationDelay: '1s' }} />
      <div className="absolute w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" style={{ top: '40%', left: '85%', animationDelay: '2s' }} />
      <div className="absolute w-1 h-1 bg-green-500 rounded-full animate-pulse" style={{ top: '60%', left: '15%', animationDelay: '3s' }} />
      <div className="absolute w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" style={{ top: '85%', left: '70%', animationDelay: '4s' }} />
      
      {/* Purple particles */}
      <div className="absolute w-1 h-1 bg-purple-500 rounded-full animate-pulse" style={{ top: '30%', left: '50%', animationDelay: '1.5s' }} />
      <div className="absolute w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse" style={{ top: '50%', left: '30%', animationDelay: '2.5s' }} />
      <div className="absolute w-1 h-1 bg-purple-500 rounded-full animate-pulse" style={{ top: '70%', left: '80%', animationDelay: '3.5s' }} />
      
      {/* Red particles */}
      <div className="absolute w-1 h-1 bg-red-500 rounded-full animate-pulse" style={{ top: '5%', left: '70%', animationDelay: '2s' }} />
      <div className="absolute w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" style={{ top: '25%', left: '35%', animationDelay: '3s' }} />
      <div className="absolute w-1 h-1 bg-red-500 rounded-full animate-pulse" style={{ top: '45%', left: '65%', animationDelay: '4s' }} />
      <div className="absolute w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" style={{ top: '95%', left: '40%', animationDelay: '5s' }} />
    </div>
  );
}