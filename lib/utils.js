const MAX_MARK_CONTENT_INDEX_1 = 30;
const MAX_MARK_CONTENT_INDEX_2 = 20;
const MAX_MARK_CONTENT_INDEX_3 = 25;
const MAX_MARK_CONTENT_INDEX_4 = 25;
const MAX_MARK_CONTENT_INDEX_5 = 30;
const MAX_MARK = 100;

export function calculateMark(participations) {
  let sumMarkByContentIndexs = [0, 0, 0, 0, 0, 0];

  participations.forEach((participant) => {
    const contentIndex = parseInt(participant.events.category) - 1;
    sumMarkByContentIndexs[contentIndex] += participant.mark;
  });

  let sumMark = 0;
  sumMark += Math.min(MAX_MARK_CONTENT_INDEX_1, sumMarkByContentIndexs[0]);
  sumMark += Math.min(MAX_MARK_CONTENT_INDEX_2, sumMarkByContentIndexs[1]);
  sumMark += Math.min(MAX_MARK_CONTENT_INDEX_3, sumMarkByContentIndexs[2]);
  sumMark += Math.min(MAX_MARK_CONTENT_INDEX_4, sumMarkByContentIndexs[3]);
  sumMark = Math.min(MAX_MARK, sumMark);
  sumMark +=
    Math.min(MAX_MARK_CONTENT_INDEX_5, sumMarkByContentIndexs[4]) +
    sumMarkByContentIndexs[5];

  sumMark = Math.min(MAX_MARK, sumMark);

  return {
    length: participations.length,
    totalMark: sumMark,
  };
}
