import React from "react"
import { Container } from "react-bootstrap"

export default function Footer(){
    <>
        <div>
        <footer style={styles.footer}>
            <div className="container text-center">
                <p className="text-center m-0">&copy; 2024 Patil AgroMart| All rights reserved.</p>
            </div>
        </footer>
        </div>
    </>
  
}
const styles = {
    footer: {
      position: 'fixed',
    //   bottom: '0',
      width: '100%',
      backgroundColor: '#343a40',
      color: '#ffffff',
      padding: '10px 0',
    },
  };