import styled from "styled-components";

const Intro = () => {
    return(
        <IntroText>
            <h1>Hi, my name is <br/>Isaiah Rodriguez</h1>  
            <h3>A Chicago based Frontend Devloper with an emphasis on functional design.</h3>
            <button>Contact Me</button>
        </IntroText>
    );
};

const IntroText = styled.div`
    padding-top: 11rem;

    h3{
        padding-bottom: 2rem;
    }

    button {
        font-size: 20px;
        font-weight: 200;
        letter-spacing: 1px;
        padding: 13px 50px 13px;
        outline: 0;
        border: 1px solid black;
        cursor: pointer;
        position: relative;
        background-color: rgba(0, 0, 0, 0);
    }   
          
    button::after {
        content: "";
        background-color: #ffe54c;
        width: 100%;
        z-index: -1;
        position: absolute;
        height: 100%;
        top: 7px;
        left: 7px;
        transition: 0.2s;
    }
          
    button:hover::after {
        top: 0px;
        left: 0px;
    }
}
`

export default Intro;

