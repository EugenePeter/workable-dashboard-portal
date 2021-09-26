// export const fields_3 = {
// 	step_one: [
// 		{
// 			label: 'vacancy',
// 			required: true,
// 			place_holder: 'enter vacancy',
// 			name: 'vacancy',
// 			value: null,
// 			field_type: 'text',
// 		},
// 		{
// 			label: 'location',
// 			required: true,
// 			place_holder: 'enter location',
// 			name: 'location',
// 			value: null,
// 			field_type: 'text',
// 		},
// 		{
// 			label: 'position type',
// 			required: true,
// 			place_holder: 'enter position type',
// 			name: 'position_type',
// 			value: null,
// 			field_type: 'select',
// 			items: ['Full time', 'Part time', 'Casual', 'temp'],
// 		},
// 		{
// 			label: 'job category',
// 			required: true,
// 			place_holder: 'enter pick job category',
// 			name: 'job_category',
// 			value: null,
// 			field_type: 'select',
// 			items: ['Full time', 'Part time', 'Casual', 'temp'],
// 		},
// 	],
// 	step_two: [
// 		{
// 			label: 'pay shedule',
// 			required: true,
// 			place_holder: 'pay shedule',
// 			name: 'salary',
// 			value: null,
// 			field_type: 'text',
// 		},
// 		{
// 			label: 'salary',
// 			required: true,
// 			place_holder: 'from',
// 			name: 'salary',
// 			value: null,
// 			field_type: 'text',
// 		},
// 		{
// 			label: 'salary',
// 			required: true,
// 			place_holder: 'to',
// 			name: 'salary',
// 			value: null,
// 			field_type: 'text',
// 		},
// 	],
// };

// {
// 	label: 'vacancy',
// 	required: true,
// 	place_holder: 'enter vacancy',
// 	name: 'vacancy',
// 	value: null,
// 	field_type: 'text',
// },

export const fields = {
	step_one: {
		step: 'Position',
		vacancy: {
			label: 'vacancy',
			required: true,
			place_holder: 'enter vacancy',
			name: 'vacancy',
			value: null,
			field_type: 'text',
		},
		location: {
			label: 'location',
			required: true,
			place_holder: 'enter location',
			name: 'location',
			value: null,
			field_type: 'text',
		},
		position_type: {
			label: 'position type',
			required: true,
			place_holder: 'enter position type',
			name: 'position_type',
			value: null,
			field_type: 'select',
			items: ['Full time', 'Part time', 'Casual', 'temp'],
		},
		job_category: {
			label: 'job category',
			required: true,
			place_holder: 'pick a job category',
			name: 'job_category',
			value: null,
			field_type: 'select',
			items: ['Full time', 'Part time', 'Casual', 'temp'],
		},
	},
	step_two: {
		// step: 'Renumeration',
		salary: {
			label: 'Pay Schedule',
			name: 'salary',
			to: {
				label: 'to',
				required: true,
				place_holder: 'to',
				name: 'to',
				value: null,
				field_type: 'text',
				items: [10, 20, 30, 40, 50, 70, 80, 90, 100],
			},
			from: {
				label: 'from',
				required: true,
				place_holder: 'pay from',
				name: 'from',
				value: null,
				field_type: 'text',
				items: [10, 20, 30, 40, 50, 70, 80, 90, 100],
			},
		},
		from: {
			label: 'from',
			required: true,
			place_holder: 'pay from',
			name: 'from',
			value: null,
			field_type: 'text',
			items: [10, 20, 30, 40, 50, 70, 80, 90, 100],
		},
		to: {
			label: 'to',
			required: true,
			place_holder: 'pay to',
			name: 'to',
			value: null,
			field_type: 'text',
			items: [10, 20, 30, 40, 50, 70, 80, 90, 100],
		},
	},
	step_three: {
		job_description: {
			label: 'Job Description',
			required: true,
			place_holder: 'About this role',
			name: 'job_description',
			value: null,
			field_type: 'textarea',
		},
		keywords: {
			label: 'Add Keywords',
			place_holder: 'Type your keywords here separated by pressing enter.',
			subtitle: 'For a more refined candidates matching you can add keywords.'
		},
	},
	step_four: {
		position_and_responsibilities: {
			label: 'Position and Responsibilities',
			required: true,
			place_holder: 'Position and Responsibilities',
			name: 'position_and_responsibilities',
			value: null,
			field_type: 'text',
		},
		keywords: [],
	},
	step_five: {
		skills_and_qualifications: {
			label: 'Skills and Qualifications',
			required: true,
			place_holder: 'Skills and Qualifications',
			name: 'skills_and_qualifications',
			value: null,
			field_type: 'text',
		},
		keywords: {
			skills: [],
			qualifications: [],
		},
	},
	step_six: {
		employer_questions: {
			label: 'Employer Questions',
			required: true,
			place_holder: 'Employer Questions',
			name: '	employer_questions',
			value: null,
			field_type: 'textarea',
		},
		keywords: [],
	},
};
