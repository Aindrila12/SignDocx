import React, { useState } from 'react'
import Page from "./page";
import { useSelector } from 'react-redux';

export default function Dashboard() {
  const menushow = useSelector((state) => state.menushow.value);

  const [totalClient, setTotalClient] = useState(10);
  const [pendingClient, setPendingClient] = useState(150);
  const [processingClient, setProcessingClient] = useState(22);
  const [rejectedClient, setRejectedClient] = useState(24);
  const [approvedClient, setApprovedClient] = useState(4);

  return (
    <Page
      menushow={menushow}

      totalClient={totalClient}
      pendingClient={pendingClient}
      processingClient={processingClient}
      rejectedClient={rejectedClient}
      approvedClient={approvedClient}
    />
  )
}
