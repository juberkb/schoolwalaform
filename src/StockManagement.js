import React from 'react';

function StockManagement() {
  return (
    <div style={{ padding: '3rem', fontFamily: 'Arial, sans-serif' }}>
      {/* Main Heading */}
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>
        School Stock Management System
      </h1>

      {/* Section: Overview */}
      <section>
        <h2>Overview</h2>
        <p>
          The School Stock Management System is designed to efficiently manage
          the inventory of uniforms and educational materials provided to
          students. This system will help track stock levels, manage student
          allocations, and ensure timely replenishment of supplies.
        </p>
      </section>

      {/* Section: Key Features */}
      <section style={{ marginTop: '30px' }}>
        <h2>Key Features</h2>
        <ul>
          <li>Manage inventory of school dresses, tie-belts, books, and bags.</li>
          <li>Track student allocations and manage stock levels.</li>
          <li>Receive low-stock alerts and generate inventory reports.</li>
          <li>Manage supplier details and purchase orders.</li>
        </ul>
      </section>

      {/* Section: Inventory Management */}
      <section style={{ marginTop: '30px' }}>
        <h3>Inventory Management</h3>
        <p>
          Inventory management includes tracking stock levels, issuing items to
          students, and managing returns or exchanges. The system will keep
          detailed records of all inventory transactions to ensure transparency
          and accountability.
        </p>
      </section>

      {/* Section: Student Stock Allocation */}
      <section style={{ marginTop: '30px' }}>
        <h3>Student Stock Allocation</h3>
        <p>
          Each student will have a profile in the system, allowing for easy
          allocation of items based on their grade and specific needs. The
          system will also manage the issuance of replacements for lost or
          damaged items.
        </p>
      </section>

      {/* Section: Reporting and Analytics */}
      <section style={{ marginTop: '30px' }}>
        <h3>Reporting and Analytics</h3>
        <p>
          The system provides comprehensive reporting tools, including inventory
          reports, issuance reports, and supplier performance analyses. These
          reports help in making informed decisions regarding inventory
          management and budgeting.
        </p>
      </section>

      {/* Section: Conclusion */}
      <section style={{ marginTop: '30px' }}>
        <h2>Conclusion</h2>
        <p>
          The School Stock Management System is an essential tool for ensuring
          that students receive the necessary supplies in a timely and
          efficient manner. By automating inventory management, the system
          reduces manual errors and enhances overall operational efficiency.
        </p>
      </section>
    </div>
  );
}

export default StockManagement;
