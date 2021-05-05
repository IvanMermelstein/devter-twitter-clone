import { colors } from "../../styles/theme";

export default function Button ({ children, onClick }) {
    return (
        <>
        <button onClick={onClick}>
            {children}
        </button>
        <style jsx>{`
            button {
                background: ${colors.black};
                border: 0;
                color: ${colors.white};
                border-radius: 9999px;
                font-weight: 800;
                padding: 8px 24px;
                font-size: 16px;
                cursor: pointer;
                transition: opacity .3s ease;
                display: flex;
                align-items: center;            
            }

            button > :global(svg) {
                margin-right: 8px;
            }

            button:hover {
                opacity: .8;
            }
        `}</style>
        </>
    )
}