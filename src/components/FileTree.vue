<script setup>
import {
  Folder,
  FolderOpenOutline,
  FileTrayFullOutline
} from '@vicons/ionicons5'
import { NIcon } from 'naive-ui'
import { ChevronForward, SunnyOutline, PlanetOutline } from '@vicons/ionicons5'

const treeData = [
  {
    key: "文件夹",
    label: "文件夹",
    prefix: () => h(NIcon, null, {
      default: () => h(Folder)
    }),
    children: [
      {
        key: "空的",
        label: "空的",
        disabled: true,
        prefix: () => h(NIcon, null, {
          default: () => h(Folder)
        })
      },
      {
        key: "我的文件",
        label: "我的文件",
        prefix: () => h(NIcon, null, {
          default: () => h(Folder)
        }),
        children: [
          {
            label: "template.txt",
            key: "template.txt",
            prefix: () => h(NIcon, null, {
              default: () => h(FileTrayFullOutline)
            })
          }
        ]
      }
    ]
  }
]
const updatePrefixWithExpaned = (_keys, _option, meta) => {
  if (!meta.node)
    return;
  switch (meta.action) {
    case "expand":
      meta.node.prefix = () => h(NIcon, null, {
        default: () => h(FolderOpenOutline)
      });
      break;
    case "collapse":
      meta.node.prefix = () => h(NIcon, null, {
        default: () => h(Folder)
      });
      break;
  }
};
const nodeProps = ({option}) => {
  return {
    onClick() {
      if (!option.children && !option.disabled) {
        message.info("[Click] " + option.label);
      }
    }
  };
};
</script>

<template>
  <n-tree
    block-line
    expand-on-click
    :data="treeData"
    :node-props="nodeProps"
    :on-update:expanded-keys="updatePrefixWithExpaned"
  />
</template>

<style scoped>

</style>
