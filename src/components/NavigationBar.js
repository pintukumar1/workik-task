import React from "react"

function NavigationBar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light rounded">
            <div class="container">
                <a class="navbar-brand" href="link">
                    Logo
                </a>
                <button
                    class="navbar-toggler border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
  )
}


export default NavigationBar