import { invertColor } from './../helpers.js';

export const LegoDetail = (brick) => {

  let block = `<section class="block-wrapper" style="background-color:#${brick.ColorHex}">
              <h3 class="legoName">Name: ${brick.LegoName.toUpperCase()}</h3>
              <div class="block-years">Manufactured ${brick.YearFrom} - ${brick.YearTo}</div>
              <div class ="block-notes">Notes: ${brick.Notes}</div>
              <div class ="brickMaterial">Material:${brick.Material}</div>
              </section>
              `;
  const link = brick.ColorstreamLinkImage;
  if (link) {
    //true? wrap the block in an a tag
    return `
      <a href="${link}" target="_blank" style="color:#${invertColor(brick.ColorHex)}">
				${block}
			</a>`;
  } else {
    //false? return the block
    return block;
  }
}