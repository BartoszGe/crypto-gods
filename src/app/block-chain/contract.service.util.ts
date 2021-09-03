import {GodDetails} from "../god-details/god-details.model";

export function mapGodDetailsFromBlockchain(response: any): GodDetails[] {
  const godDetails: GodDetails[] = []
  const tableLength = response[0].length - 1;
  response[0].map((detail: any, index: number) => {
    const revertedIndex = tableLength - index;
    godDetails.push({
      id: index,
      date: response[0][revertedIndex],
      bidderAddress: response[1][revertedIndex],
      amount: response[2][revertedIndex]
    })
  })
  return godDetails;
}
