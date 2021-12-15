import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
    return (
        <div className='login'> 
            <div id="full-screen">
                <div id="enclosing-components">
                    <div id="company-headline">
                        <div id="company-name">facebook</div>
                        <div id="company-login-slogan">Facebook helps you connect and share with the people in your life.</div>
                    </div>
                    <div id="login-container">
                        <div id="form-container">
                            <div className="input-field-container">
                                .
                            <input type="email" placeholder="Email or Phone Number" />
                        </div>
                        <div className="input-field-container">
                            <input type="password" placeholder="Password" />
                        </div>
                        <div className="btn link" id="login-btn">
                           Log In
                        </div>
                        <div className="link" id="forgot-password">
                           Forgot Password?
                        </div>
                        <hr />
                        
                        <div id="create-btn-container">
                        
                            <Link to='/register' className="btn link" id="create-btn" style={{ textDecoration: 'none'}}>
                                Create New Account
                            </Link>
                            
                        </div>
                        
                    </div>
                    <div id="create-a-page-section">
                        <span className="link" id="create-a-page-link">Create a Page</span>
                        <span> for a celebrity, band or business.</span>
                    </div>
                </div>
            </div>
            
        </div>

        <footer>
            <div class="footer-contents">
                <ol>
                    <li>English (UK)</li>
                    <li><a href="#">മലയാളം</a></li>
                    <li><a href="#">தமிழ்</a></li>
                    <li><a href="#">తెలుగు</a></li>
                    <li><a href="#">বাংলা</a></li>
                    <li><a href="#">اردو</a></li>
                    <li><a href="#">हिन्दी</a></li>
                    <li><a href="#">ಕನ್ನಡ</a></li>
                    <li><a href="#">Español</a></li>
                    <li><a href="#">Português (Brasil)</a></li>
                    <li><a href="#">Français (France)</a></li>
                    <li><button>+</button></li>
                </ol>
                <ol>
                    <li><a><Link to='/register'>Sign Up</Link></a></li>
                    <li><a href="#">Log In </a></li>
                    <li><a href="#">Messenger</a></li>
                    <li><a href="#">Facebook Lite</a></li>
                    <li><a href="#">Watch</a></li>
                    <li><a href="#">People</a></li>
                    <li><a href="#">Pages</a></li>
                    <li><a href="#">Page categories</a></li>
                    <li><a href="#">Places</a></li>
                    <li><a href="#">Games</a></li>
                    <li><a href="#">Locations</a></li>
                    <li><a href="#">Marketplace</a></li>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">PayGroups</a></li>
                    <li><a href="#">Jobs</a></li>
                    <li><a href="#">Oculus</a></li>
                    <li><a href="#">Portal</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Local</a></li>
                    <li><a href="#">Sign Up</a></li>
                    <li><a href="#">Log In </a></li>
                    <li><a href="#">Messenger</a></li>
                    <li><a href="#">Facebook Lite</a></li>
                    <li><a href="#">Watch</a></li>
                    <li><a href="#">People</a></li>
                    <li><a href="#">Pages</a></li>
                    <li><a href="#">Page categories</a></li>
                    <li><a href="#">Places</a></li>
                    <li><a href="#">Games</a></li>
                    <li><a href="#">Locations</a></li>
                    <li><a href="#">Marketplace</a></li>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">PayGroups</a></li>
                    <li><a href="#">Jobs</a></li>
                    <li><a href="#">Oculus</a></li>
                    <li><a href="#">Portal</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Local</a></li>
                </ol>
                <small>Facebook © 2021</small>
            </div>
        </footer>
    </div>
    )
}

export default Login
