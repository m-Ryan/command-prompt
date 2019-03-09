# command-prompt

---

Install
---

```
npm install --save command-prompt

```

```
yarn add command-prompt

```

Usage

---

```js
import commandPrompt from 'command-prompt';

const options = {
	name: '选择你要进行的项目',
	choices: [
		{
			name: 'project1',
			choices: [
				{
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
			name: 'project2',
			choices: [
				{
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
}

commandPrompt(options);


```
