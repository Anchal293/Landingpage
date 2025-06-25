// script.js
document.addEventListener('DOMContentLoaded', () => {
  /************************************************
                NAVIGATION LINKS               
   ************************************************/
  const navMap = {
    menu:        'menu.html',
    home:        'index.html',
    about:       'about.html',
    contact:      'contact.html', 
    info :        'information.html',
    'sign-in':        'signIn.html' 
  };

  Object.entries(navMap).forEach(([cls, href]) => {
    document.querySelector(`.${cls}`)?.addEventListener('click', () => (location.href = href));
  });

  /************************************************
               CTA BUTTONS (if present)        
   ************************************************/
  document.querySelector('.order-now-btn')?.addEventListener('click', () => (location.href = 'foodOrder.html'));
  document.querySelector('.Button1')?.addEventListener('click', () => (location.href = 'menu.html'));
  document.querySelector('#Button')?.addEventListener('click', () => (location.href = 'about.html'));
  document.querySelector('#button3')?.addEventListener('click', () => (location.href = 'menu.html'));

  /************************************************
               CONTACT FORM (contact.html)     
   ************************************************/
  const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async e => {
    e.preventDefault();
    const payload = {
      name:    document.getElementById('name').value,
      email:   document.getElementById('email').value,
      message: document.getElementById('message').value,
    };
    try {
      const res = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        alert('Thank you! Your message has been sent.');
        contactForm.reset();
      } else {
        alert('Server error; try later.');
      }
    } catch (err) {
      console.error('Fetch fail', err);
      alert('Cannot reach server');
    }
  });
}

  /************************************************
               ORDER FORM (foodOrder.html)     
   ************************************************/
  const orderForm = document.getElementById('orderForm');       // form id="orderForm"
  if (orderForm) {
    orderForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const payload = {
        name:    document.getElementById('name').value,
        phone:   document.getElementById('phone').value,
        address: document.getElementById('address').value,
        food:    document.getElementById('food').value,
      };

      console.log(' Order payload:', payload);

      try {
        const res  = await fetch('http://localhost:3000/api/orders', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        const data = await res.json();
        (data.success)
          ? alert('Thank you! Your order has been placed.')
          : alert('Something went wrong. Please try again.');
        if (data.success) orderForm.reset();
      } catch (err) {
        console.error('Order fetch error:', err);
        alert('Server unreachable');
      }
    });
  }

  console.log(' script.js initialised (page-specific handlers attached)');
});

/************************************************
             SIGN-IN FORM (signIn.html)      
 ************************************************/
const signInForm = document.getElementById('signInForm');
if (signInForm) {
  signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const payload = {
      email:    document.getElementById('email').value,
      password: document.getElementById('password').value,
    };

    try {
      const res  = await fetch('http://localhost:3000/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (data.success) {
        alert('Login successful ');
        location.href = 'index.html';
      } else {
        alert(data.message || 'Invalid credentials');
      }
    } catch (err) {
      console.error('Login fetch error:', err);
      alert('Server unreachable');
    }
  });
}
