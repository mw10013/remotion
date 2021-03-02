export type FrameRange = number[] | null;

let range: FrameRange = null;

export const setFrameRange = (newFrameRange: string) => {
	const frameRange: FrameRange = newFrameRange.split('-').map((f) => Number(f));
	if (frameRange.length > 2 || frameRange.length <= 0) {
		throw new Error(
			`--range flag must be a number or 2 numbers separate by '-', instead got ${frameRange.length} numbers`
		);
	}
	for (const key in frameRange) {
		if (typeof frameRange[key] !== 'number') {
			throw new Error(
				'--range flag must be a number or 2 numbers separate by `-`'
			);
		}
	}
	range = frameRange;
};

export const getFrameRange = () => range;
