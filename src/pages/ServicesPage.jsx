import React from 'react';
import { useParams } from 'react-router-dom';
import ServiceSidebar from '../components/services/ServiceSidebar';
import ServiceContent from '../components/services/ServiceContent';

export default function ServicesPage({ service }) {
  const { id } = useParams();
  const activeId = id || service || 'wellness-nutrition';
  
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:row gap-16 lg:flex-row">
           <ServiceSidebar />
           <ServiceContent id={activeId} />
        </div>
      </div>
    </div>
  );
}
