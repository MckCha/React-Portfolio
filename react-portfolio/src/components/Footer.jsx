import handleClick from '../utils/handleClick';

function Footer() {
    return (
        <div className="footerContainer hidden">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2be6ee603aba73c69ea37d90e35b4d5982834ca8b6129c3a667551c5b7ee9f9?"
              className="img"
              onClick={() => handleClick('https://www.linkedin.com/in/mike-cha/')}
            />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/776a38d83520d8caa0931f8d0c2a80947caeeca2aadf9ecb0ae513e136fcc25b?"
            className="img"
            onClick={() => handleClick('https://docs.google.com/document/d/1kW1ffpgiJ8W_55nNsqVWcflSzyEPrE0Po9w7fTu7OpI/edit')}
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d9ad75814058810af8576721603175b13ac2014cb485ad768066a2ce7b862ab?"
            className="img"
            onClick={() => handleClick('https://github.com/MckCha')}
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/51392324c9483cfe39040f12925d2f4df45b074778f9b41ab41be7f825b10c1a?"
            className="img"
            onClick={() => handleClick('https://profile.indeed.com/?hl=en_US&co=US&from=gnav-homepage')}
          />
        </div>
    )
}

export default Footer