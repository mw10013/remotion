import type {z} from 'remotion';

export type PropsIfHasProps<
	Schema extends z.ZodTypeAny,
	Props
> = z.ZodTypeAny extends Schema
	? {} extends Props
		? {
				// Neither props nor schema specified
				inputProps?: z.infer<Schema> & Props;
		  }
		: {
				// Only props specified
				inputProps: Props;
		  }
	: {
			inputProps: z.infer<Schema> & Props;
	  };
