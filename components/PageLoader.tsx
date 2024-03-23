import { ReactNode } from 'react';

function PageLoader(props: { loading: boolean; children: ReactNode }) {
  return (
    <>
      {props.loading && (
        <div
          style={{
            position: 'fixed',
            zIndex: '9999',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <svg
            id="loader"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            style={{ width: '40px', height: '40px', background: 'none' }}
          >
            <circle
              cx="25"
              cy="25"
              r="20"
              strokeWidth="4"
              stroke={'blue'}
              strokeDasharray="31.41592653589793"
              fill="none"
              strokeLinecap="round"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                repeatCount="indefinite"
                dur="1s"
                values="0 25 25;360 25 25"
                keyTimes="0;1"
              ></animateTransform>
            </circle>
          </svg>
        </div>
      )}
      {props.children}
    </>
  );
}

export default PageLoader;
