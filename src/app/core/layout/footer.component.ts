import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>About</h3>
            <ul>
              <li><a href="#">About UrbanClone</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h3>For Customers</h3>
            <ul>
              <li><a href="#">Help & Support</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Book a Service</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h3>For Professionals</h3>
            <ul>
              <li><a href="#">Join as Professional</a></li>
              <li><a href="#">How it Works</a></li>
              <li><a href="#">Earnings</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h3>Legal</h3>
            <ul>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <p class="copyright">© 2025 UrbanClone – Demo app for learning & practice.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [
    `
    .footer {
      background: var(--surface-color);
      border-top: 1px solid var(--border-color);
      padding: 3rem 0 1rem;
      margin-top: 4rem;
    }

    .footer-container {
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    .footer-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .footer-section h3 {
      margin: 0 0 1rem 0;
      font-size: 0.95rem;
      font-weight: 600;
      color: var(--text-color);
    }

    .footer-section ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .footer-section li {
      margin-bottom: 0.75rem;
    }

    .footer-section a {
      color: var(--text-secondary);
      text-decoration: none;
      font-size: 0.875rem;
      transition: color 0.2s;
    }

    .footer-section a:hover {
      color: var(--primary-color);
    }

    .footer-bottom {
      padding-top: 2rem;
      border-top: 1px solid var(--border-color);
      text-align: center;
    }

    .copyright {
      color: var(--text-secondary);
      font-size: 0.875rem;
      margin: 0;
    }

    @media (max-width: 768px) {
      .footer {
        padding: 2rem 0 1rem;
        margin-top: 3rem;
      }

      .footer-content {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
      }
    }

    @media (max-width: 480px) {
      .footer-content {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }
    }
    `
  ],
})
export class FooterComponent {}
