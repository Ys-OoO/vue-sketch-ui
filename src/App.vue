<template>
  <Block>
    <Button ref="buttonRef" size="large" @click="handleClick">Primary</Button>
    <Button type="success">Success</Button>
    <Button type="danger" size="small" dashed>Danger</Button>
    <Button plain dashed>Plain</Button>
    <Button disabled size="large">Disable</Button>
  </Block>
  <Block>
    <Button size="large" plain>Primary</Button>
    <Button type="success" plain>Success</Button>
    <Button type="danger" size="small" dashed plain>Danger</Button>
    <Button plain dashed>Plain</Button>
    <Button size="large" plain disabled>Disable</Button>
  </Block>
  <Block>
    <Button :loading="loading1" @click="onLoad1">Click</Button>
    <Button type="success" size="small" icon="arrow-up" @click="onLoad2" :loading="loading2"
      >Click Upload</Button
    >
    <Button type="danger" size="small" dashed loading>Loading</Button>
  </Block>
  <Block>
    <SketchCollapse v-model="openCollapse1" @change="doChange">
      <SketchCollapseItem name="1" title="Default Title">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas iste voluptatibus minus.
        Ratione sit culpa iusto, tenetur praesentium ex dignissimos quod veniam nisi, illo
        distinctio ut modi perspiciatis nostrum debitis. Repellat nisi perferendis, blanditiis
        dolorem eaque nihil illum sit qui temporibus tempora explicabo fuga, minus impedit
        cupiditate voluptatum debitis magnam quibusdam minima? Iure laboriosam, quia deserunt fuga
        aliquid officia dolorum? Rem impedit tempore, sed, quas nulla accusantium culpa excepturi
        reprehenderit voluptatem, distinctio eveniet eligendi temporibus. Nesciunt, laborum qui eius
        officiis nostrum deserunt necessitatibus, quis ab sequi adipisci fuga facere ipsum?
        Architecto non quasi consequuntur explicabo alias in nesciunt. Eos dolor consequatur minima
        nemo eum autem amet odit non nam excepturi exercitationem porro, eius aliquam quod quas
        repellendus dicta ex dignissimos. Quasi doloremque nemo quia expedita sequi voluptates,
        repellat hic unde dicta, autem suscipit dolores a nam nobis sed quae, qui ut provident
        incidunt error fugit esse! Tempore harum beatae necessitatibus! Ullam itaque nemo omnis
        nesciunt dolor unde quidem vel quia tenetur dolorum temporibus nostrum adipisci a quas
        reprehenderit molestiae veritatis blanditiis dolores, ad earum. Delectus distinctio corporis
        reprehenderit tempora sit.
      </SketchCollapseItem>
      <SketchCollapseItem name="2">
        <template #header>
          <span>
            <span>Custom Header</span>
            <AwesomeIcon icon="street-view" />
          </span>
        </template>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, aspernatur cum officia quae
        labore facere fugit nulla tempore natus ipsa!
      </SketchCollapseItem>
      <SketchCollapseItem name="3" title="Disabled Item" disabled>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, quisquam.
      </SketchCollapseItem>
    </SketchCollapse>
  </Block>
  <Block>
    <SketchCollapse accordion v-model="openCollapse2" @change="doChange">
      <SketchCollapseItem name="a" title="Accordion 1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas iste voluptatibus minus.
        Ratione sit culpa iusto, tenetur praesentium ex dignissimos quod veniam nisi, illo
        distinctio ut modi perspiciatis nostrum debitis. Repellat nisi perferendis, blanditiis
        dolorem eaque nihil illum sit qui temporibus tempora explicabo fuga, minus impedit
        cupiditate voluptatum debitis magnam quibusdam minima? Iure laboriosam, quia deserunt fuga
        aliquid officia dolorum? Rem impedit tempore, sed, quas nulla accusantium culpa excepturi
        reprehenderit voluptatem, distinctio eveniet eligendi temporibus. Nesciunt, laborum qui eius
        officiis nostrum deserunt necessitatibus, quis ab sequi adipisci fuga facere ipsum?
        Architecto non quasi consequuntur explicabo alias in nesciunt. Eos dolor consequatur minima
        nemo eum autem amet odit non nam excepturi exercitationem porro, eius aliquam quod quas
        repellendus dicta ex dignissimos. Quasi doloremque nemo quia expedita sequi voluptates,
        repellat hic unde dicta, autem suscipit dolores a nam nobis sed quae, qui ut provident
        incidunt error fugit esse! Tempore harum beatae necessitatibus! Ullam itaque nemo omnis
        nesciunt dolor unde quidem vel quia tenetur dolorum temporibus nostrum adipisci a quas
        reprehenderit molestiae veritatis blanditiis dolores, ad earum. Delectus distinctio corporis
        reprehenderit tempora sit.
      </SketchCollapseItem>
      <SketchCollapseItem name="b" title="Accordion 2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, aspernatur cum officia quae
        labore facere fugit nulla tempore natus ipsa!
      </SketchCollapseItem>
    </SketchCollapse>
  </Block>
  <Block vertical>
    <SketchAlert type="primary">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, dignissimos!
    </SketchAlert>
    <SketchAlert type="danger" icon="warning" closeable @close="close">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, dignissimos!
    </SketchAlert>
    <SketchAlert type="success" closeable :options="options">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, dignissimos!
    </SketchAlert>
  </Block>
  <Block>
    <SketchToolTip
      content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, minus."
    >
      <Button type="success" size="small" dashed plain>Hover</Button>
    </SketchToolTip>
    <SketchToolTip trigger="click" ref="tooltipRef1">
      <template #content>
        <Block>
          <Button type="success" size="small" icon="arrow-up" @click="onLoad2" :loading="loading2"
            >Click Upload</Button
          >
        </Block>
      </template>
      <Button type="danger" size="small" dashed plain>Click</Button>
    </SketchToolTip>
    <SketchToolTip manual content="Lorem ipsum dolor" placement="left" ref="tooltipRef2">
      <div style="border: 1px solid black">Box</div>
    </SketchToolTip>
    <Button type="danger" size="small" dashed plain @click="toggleTooltip">Show in left box</Button>
  </Block>
  <Block>
    <SketchDropdown :menu-options="dropdownOpt">
      <Button size="small" dashed>Hover me</Button>
    </SketchDropdown>
    <DropdownJSX :menu-options="dropdownOpt" trigger="click">
      <Button size="small" dashed>JSX有BUG 搞不明白</Button>
    </DropdownJSX>
  </Block>
  <Block>
    <Button @click="showMessage1">Click</Button>
    <Button @click="showMessage2" type="success">Click</Button>
    <Button @click="showMessage3" type="danger" dashed>Click</Button>
  </Block>
</template>

<script setup lang="ts">
import { h, ref } from 'vue';
import Block from '@@/SketchBlock/Block.vue';
import Button from '@@/SketchButton/SketchButton.vue';
import type { ButtonInstance, ButtonProps } from '@@/SketchButton/types';
import SketchCollapse from '@/components/SketchCollapse/SketchCollapse.vue';
import SketchCollapseItem from '@/components/SketchCollapse/SketchCollapseItem.vue';
import type { CollapseChangeParam } from './components/SketchCollapse/types';
import AwesomeIcon from './components/Icon/AwesomeIcon.vue';
import SketchAlert from './components/SketchAlert/SketchAlert.vue';
import SketchToolTip from './components/SketchToolTip/SketchToolTip.vue';
import { type SketchToolTipInstance } from './components/SketchToolTip/types';
import SketchDropdown from './components/SketchDropdown/SketchDropdown.vue';
import DropdownJSX from './components/SketchDropdown/Dropdown';

import type { MenuOption } from './components/SketchDropdown/types';
import { createMessage } from './components/SketchMessage/methods';
//---------SketchButton
const buttonRef = ref<ButtonInstance | null>(null);
const handleClick = (e: Event) => {
  console.log(e);
};
const loading1 = ref(false);
const onLoad1 = () => {
  loading1.value = true;
  setTimeout(() => {
    loading1.value = false;
  }, 1000);
};
const loading2 = ref(false);
const onLoad2 = () => {
  loading2.value = true;
  setTimeout(() => {
    loading2.value = false;
  }, 1000);
};
//---------SketchCollapse
const openCollapse1 = ref([]);
const openCollapse2 = ref([]);
function doChange(name: CollapseChangeParam) {
  // tooltipRef1.value?.popperInstance?.update();
  console.log(name);
}
//---------SketchAlert
const close = () => {
  alert('close');
};
const options: ButtonProps[] = [
  {
    type: 'danger',
    size: 'small',
    dashed: true,
    text: 'info',
  },
];
//---------SketchToolTip
const tooltipRef1 = ref<SketchToolTipInstance | null>(null);
const tooltipRef2 = ref<SketchToolTipInstance | null>(null);
const toggleTooltip = () => {
  if (tooltipRef2.value) {
    if (tooltipRef2.value.isShow) {
      tooltipRef2.value.hide?.();
    } else {
      tooltipRef2.value.show?.();
    }
  }
};
//---------SketchDropdown
const dropdownOpt = ref<MenuOption[]>([
  {
    label: 'Item 1',
    key: 1,
  },
  {
    label: 'Item 2',
    key: 2,
  },
  {
    label: h(Button, {}, () => 'Item 3'),
    key: 3,
  },
]);
// ----------SketchMessage
function showMessage1() {
  createMessage({
    duration: 0,
    closeable: true,
    message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, mollitia!',
  });
}
function showMessage2() {
  createMessage({
    duration: 0,
    closeable: true,
    message:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, mollitia!onsectetur adipisicing elit. Ipsum, mollitia!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, mollitia!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, mollitia!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, mollitia!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, molliti',
    type: 'success',
    offset: 60,
  });
}
function showMessage3() {
  createMessage({
    duration: 1000,
    closeable: true,
    message: 'Lorem ipsum dolor sit, amet ca!',
    type: 'error',
    offset: 100,
  });
}
</script>

<style scoped lang="scss"></style>
