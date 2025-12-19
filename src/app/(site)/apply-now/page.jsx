"use client";
import { useState } from "react";
import Link from "next/link";
export default function ApplyNowPage() {
  return (
    <div className="container align-items-center justify-content-center min-vh-100 portal-container">
      <div className="portal-card">
        <div className="portal-header">
          <img
            src="/images/whitelogo.png"
            alt="PSDI"
            className="portal-logo"
          />
          <h1 className="portal-title text-white">
            Welcome To The PSDI Admission Portal!
          </h1>
          <p className="portal-subtitle">
            Your gateway to skill development and career advancement with
            Hunarmand Punjab
          </p>
        </div>

        <div className="portal-content">
          <p className="portal-description">
            Register yourself as a new applicant. After successful registration,
            check your email for the login credentials we sent you. Enter your
            email and password to log in to the Candidate Portal. You will then
            have access to continue your application process.
          </p>

          <div className="portal-options">
            {/* New Registration */}
            <div className="option-card">
              <div className="option-icon">
                <i className="fas fa-user-plus"></i>
              </div>
              <h3 className="option-title">New Registration</h3>
              <p className="option-description">
                Create your account to start the application process for PSDI
                programs
              </p>
              <Link href="/register" className="btn-secondary-custom text-white"><i className="fas fa-user-plus"></i> Register Now</Link>
            </div>

            {/* Candidate Login - Highlighted */}
            <div className="option-card logincard">
              <div className="login-icon">
                <i className="fas fa-sign-in-alt"></i>
              </div>
              <h3 className="login-title text-white">Candidate Login</h3>
              <p className="login-description">
                Access your candidate portal with your credentials to continue
                your application
              </p>
              <br />
              <Link href="/login" className="btn-primary-custom text-white"><i className="fas fa-sign-in-alt"></i> Login to Portal</Link>
            </div>

            {/* How It Works */}
            <div className="option-card">
              <div className="option-icon">
                <i className="fas fa-question-circle"></i>
              </div>
              <h3 className="option-title">How It Works</h3>
              <p className="option-description">
                Learn about the step-by-step process for PSDI admission and
                application
              </p>
              <Link href="/how-it-works" className="btn-secondary-custom text-white"><i className="fas fa-question-circle"></i> View Process</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
