import { Meta, Story } from '@storybook/angular/types-6-0';
import { AnimalComponentComponent } from '../app/animal-component/animal-component.component';
import { Animals } from '../app/animals.enum';

export default {
  title:     'Example/Button',
  component: AnimalComponentComponent,
} as Meta;

const Template: Story<AnimalComponentComponent> = (args: AnimalComponentComponent) => ({
  props: args,
});

export const Cat = Template.bind({});
Cat.args = {
  animal: Animals.Cat,
};

export const Dog = Template.bind({});
Dog.args = {
  animal: Animals.Dog,
};

export const Mouse = Template.bind({});
Mouse.args = {
  animal: Animals.Mouse,
};

export const None = Template.bind({});
None.args = {};
