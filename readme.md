# command-prompt

---

Install
---

```js
npm install --save command-prompt

```

```js
yarn add command-prompt

```

Usage

---

```js
import commandPrompt from 'command-prompt';

const options = {
	name: 'choose your project',
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
					method(again) {
						console.log('git fetch.....');
						again();
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

![图片1](http://assets.maocanhua.cn/Fv1Q8rp-DfmC1El1zs0OPnzAf2S4) 

![图片1](http://assets.maocanhua.cn/Fm87DgOcCLI1KQMKiCnH64TRtUug) 

![图片1](http://assets.maocanhua.cn/FtoOaB5TRP76BiI16zeBwGqhAjIv) 
