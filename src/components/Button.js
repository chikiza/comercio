import { Component } from "react";

const styles = {
    button: {
        backgroundColor:'#0a283e',
        cursor:'pointer',
    }
}
class Button extends Component {
    render() {
        return(
            <button style={styles.button} {...this.props}/>
        )
    }
}

export default Button