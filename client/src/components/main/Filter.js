import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Math from '../../assets/Math_Icon.png';
import Language from '../../assets/Language_Arts_Icon.png';
import Science from '../../assets/Science_Icon.png';
import History from '../../assets/Geo_Icon.png';
import Arts from '../../assets/Fine_Arts_Icon.png';
import PhysEd from '../../assets/Phys_Ed_Icon.png';

const FilterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`
const FilterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 20px;
`

const Box = styled.div`
  display: 'flex';
  align-items: 'center'; 
  border: '1px solid rgba(191, 175, 134, 0.3)'; 
  padding: '10px'; 
  width: '300px'; 
  margin-bottom: '10px'; 
  background: '#FFF8E6';
`

function Filter() {
  return (
    <FilterWrap>
      <FilterBox>
      <h2 style={{color: '#BF9018', fontWeight: '700'}}>Filter books by category</h2>
        
        <div style={{display: 'flex'}}>
          <div style={{display: 'flex', flexDirection: 'column', paddingRight: '20px'}}>
            <Link>
              <div style={{ display: 'flex', alignItems: 'center', border: '1px solid rgba(191, 175, 134, 0.3)', padding: '10px',
                            width: '300px', marginBottom: '10px', background: '#FFF8E6'}}>
                <img src={Math} alt="Math icon" />
                <p style={{padding: '0 10px 0 10px', fontSize: '20px', color: '#0D5814', fontWeight: '700'}}>Mathematics</p>
              </div>
            </Link>
            <Link>
              <div style={{ display: 'flex', alignItems: 'center', border: '1px solid rgba(191, 175, 134, 0.3)', padding: '10px',
                            width: '300px', marginBottom: '10px', background: '#FFF8E6'}}>
                <img src={Language} alt="Language arts icon" />
                <p style={{padding: '10px', fontSize: '20px', color: '#0D5814', fontWeight: '700'}}>Language Arts</p>
              </div>
            </Link>
            <Link>
              <div style={{ display: 'flex', alignItems: 'center', border: '1px solid rgba(191, 175, 134, 0.3)', padding: '10px',
                            width: '300px', marginBottom: '10px', background: '#FFF8E6'}}>
                <img src={Science} alt="Science" />
                <p style={{padding: '10px', fontSize: '20px', color: '#0D5814', fontWeight: '700'}}>Science</p>
              </div>
            </Link>
          </div>

          <div style={{display: 'flex', flexDirection: 'column'}}>
            <Link>
              <div style={{ display: 'flex', alignItems: 'center', border: '1px solid rgba(191, 175, 134, 0.3)', padding: '10px',
                            width: '300px', marginBottom: '10px', background: '#FFF8E6'}}>
                <img src={History} alt="History/Geography icon"/>
                <p style={{padding: '10px', fontSize: '20px', color: '#0D5814', fontWeight: '700'}}>History/Geography</p>
              </div>
            </Link>
            <Link>
              <div style={{ display: 'flex', alignItems: 'center', border: '1px solid rgba(191, 175, 134, 0.3)', padding: '10px',
                            width: '300px', marginBottom: '10px', background: '#FFF8E6'}}>
                <img src={Arts} alt="Fine arts icon"/>
                <p style={{padding: '10px', fontSize: '20px', color: '#0D5814', fontWeight: '700'}}>Fine Arts</p>
              </div>
            </Link>
            <Link>
              <div style={{ display: 'flex', alignItems: 'center', border: '1px solid rgba(191, 175, 134, 0.3)', padding: '10px',
                            width: '300px', marginBottom: '10px', background: '#FFF8E6'}}>
                <img src={PhysEd} alt="Physical education icon" />
                <p style={{padding: '10px', fontSize: '20px', color: '#0D5814', fontWeight: '700'}}>Physical Education</p>
              </div>
            </Link>
          </div>
        </div>
      </FilterBox>
    </FilterWrap>
  )
}

export default Filter;