import styled from 'styled-components';
import { TextField } from '@mui/material';

export const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  color: #5a3d2b;
//   position: relative;
//   width: 100%;
//   min-height: 100vh;
//   overflow: hidden; /* Ensure no overflow extends the container */

  /* Set the background image for the ::before pseudo-element */
//   &::before {
//     content: "";
//     position: fixed; /* Change position to fixed */
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-image: url('/src/assets/images/s&s.png');
//     background-size: cover;
//     background-repeat: no-repeat;
//     opacity: 0.3; /* Adjust the opacity value as needed */
//     z-index: -1; /* Ensure the background remains behind content */
//   }
`;



export const Title = styled.h1`
  color: #A0830E;
  text-align: center;
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 16px;
`;

export const Subtitle = styled.h2`
  color: #A0830E;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 300;
  margin-bottom: 16px;
`;

export const SearchWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #fafafa;
  padding: 10px 0;
`;

export const StyledTextField = styled(TextField)`
  && {
    width: 100%;
	background-color: rgba(246, 241, 221, 0.2);
    border-radius: 5px;
    margin-bottom: 10px;

	.MuiOutlinedInput-root {
		fieldset {
		  border-color: #A0830E; /* Border color */
		}
		&:hover fieldset {
		  border-color: #A0830E; /* Hover state border color */
		}
		&.Mui-focused fieldset {
		  border-color: #DECC84; /* Focused state border color */
		}
	}

	.MuiInputLabel-root {
		font-family: 'OPTIBakerDanmarkOne', sans-serif;
		color: ##F6F1DD; /* Root (default) label color */
	}

	.MuiInputLabel-shrink {
		font-family: 'OPTIBakerDanmarkOne', sans-serif;
		color: #DECC84; /* Shrink (focused) label color */
	}

	.MuiInputBase-root {
		font-family: 'OPTIBakerDanmarkOne', sans-serif;
		color: #A0830E; 
	}
  }
`;

export const TableGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const TableCard = styled.div`
  border: 1px solid #A0830E;
  padding: 15px;
  border-radius: 5px;
`;

export const TableNumber = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 10px;
`;

export const GuestList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const GuestItem = styled.li`
  color: #B59410;
  margin-bottom: 5px;
`;