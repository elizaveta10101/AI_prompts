import React, { useState, useEffect } from 'react';

export default function Dashboard() {
  const [d, setD] = useState<number | null>(null);
  const [worker, setWorker] = useState<Worker | null>(null);

  useEffect(() => {
    // Create a new Web Worker instance
    const myWorker = new Worker('/worker.js');

    myWorker.onmessage = (e) => {
      setD(e.data);
      myWorker.terminate();
    };

    myWorker.onerror = (error) => {
      console.error('Web Worker error:', error);
    };

    // Store the worker instance in state for potential cleanup
    setWorker(myWorker);

    // Start the calculation in the worker
    myWorker.postMessage('startCalculation');

    // Cleanup function: Terminate the worker when the component unmounts
    return () => {
      if (myWorker) {
        myWorker.terminate();
      }
    };
  }, []); 

  return (
    <div>
      {d === null ? (
        <p>Calculating sum (this won't block the UI)...</p>
      ) : (
        <p>Total sum: {d}</p>
      )}
    </div>
  );
}