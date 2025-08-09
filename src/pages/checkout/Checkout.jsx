import React from 'react';

export default function Checkout() {
  return (
    <div>
      💳 Checkout Page
      <form>
        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="Address" />
        <button>Confirm Payment</button>
      </form>
    </div>
  );
}
