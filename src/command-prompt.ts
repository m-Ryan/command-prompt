import * as inquirer from 'inquirer';
import { IpromptItem, IBasepromptItem, IQuestion, IBaseQuestion } from './command-prompt.interface';

export default function commandPrompt(question: IBaseQuestion) {
	return selectChoice(promptItemAdapter(question));
}

function prompt(question: IQuestion): Promise<{ value: string }> {
	return inquirer.prompt(question);
}

function promptItemAdapter(basePrompt: IBaseQuestion): IQuestion {
	const prompItem = basePrompt as IpromptItem;
	if (prompItem.type === undefined) {
		prompItem.type = 'list';
	}

	if (isPromptItem(prompItem)) {
		prompItem.choices.forEach((item) => {
			if (isPromptItem(item)) {
				item.choices.push({
					name: 'go back',
					type: 'list',
					method: () => {
						selectChoice(prompItem);
					}
				});
			}
			promptItemAdapter(item);
		});
	}

	return basePrompt as IQuestion;
}

async function selectChoice(question: IQuestion): Promise<void> {
	if (isPromptItem(question)) {
		const data = quesAdapter(await prompt(question));
		const choice = question.choices.filter((item) => item.name === data.value)[0];
		return selectChoice(choice);
	}

	return question.method();
}

function quesAdapter(question: any) {
	const name = Object.keys(question)[0];
	const value = Object.values(question)[0];
	return {
		name,
		value
	};
}

function isPromptItem(promptItem: IQuestion): promptItem is IpromptItem {
	return (<IpromptItem>promptItem).choices !== undefined;
}

function isBasePromptItem(promptBaseItem: IBaseQuestion): promptBaseItem is IBasepromptItem {
	return (<IpromptItem>promptBaseItem).choices !== undefined;
}
