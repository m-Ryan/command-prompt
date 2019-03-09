const commandPrompt = require('../dist/index').default;

const options = {
	name: 'choose your project',
	choices: [{
			name: 'project1',
			choices: [{
					name: 'clone project',
					method(again) {
						console.log('git clone.....');
						again();
					}
				},
				{
					name: 'fetch project',
					method() {
						console.log('git fetch.....');
					}
				}
			]
		},
		{
			name: 'project2',
			choices: [{
					name: 'clone project',
					method() {
						console.log('git clone.....');
					}
				},
				{
					name: 'fetch project',
					method() {
						console.log('git fetch.....');
					}
				}
			]
		},
		{
			name: 'exit',
			method: () => process.exit()
		}
	]
};

commandPrompt(options);
