<template>
  <div class="globalBackground-container global-seeting-container" v-if="colorMatching">
    <div class="global-setting-title setting-title">
      <div class="global-setting-left">背景</div>
      <div class="global-setting-right" @click="closePanel">
        <el-icon style="font-size: 22px">
          <Close />
        </el-icon>
      </div>
    </div>
    <div class="globalBackground-container-top">
      <div class="globalBackground-container-top-container">
        <div class="globalBackground-bg-container">
          <div
            class="globalBackground-color"
            :style="[{ 'background-color': getComputerVariableColorVal }]"
            :class="getComputerVariableColorVal === 'emptyNot' ? 'emptyNot' : ''"
            v-if="backgroundGlobalSetting.currentChooseIndex === '1'"
          >
            <div
              class="globalBackground-color-choose"
              @click="
                chooseColor('color', getComputerVariableColorVal === 'emptyNot' ? '' : getComputerVariableColorVal)
              "
            ></div>
          </div>
          <div
            class="globalBackground-img globalBackground-setting-content"
            v-if="backgroundGlobalSetting.currentChooseIndex === '2'"
          >
            <div
              class="globalBackground-img-has-container globalBackground-has-container"
              v-show="backgroundGlobalSetting.imageSetting.url"
            >
              <img :src="backgroundGlobalSetting.imageSetting.url" alt="" />
            </div>
            <div
              class="globalBackground-no-container"
              v-show="!backgroundGlobalSetting.imageSetting.url"
              @click="uploadImg"
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_678_10202)">
                  <path
                    d="M23.975 6.09L22.3533 4.13C22.0267 3.745 21.5483 3.5 21 3.5H7C6.45167 3.5 5.97333 3.745 5.65833 4.14167L4.03667 6.09C3.69833 6.49833 3.5 7.01167 3.5 7.58333V22.1667C3.5 23.45 4.53833 24.5 5.83333 24.5H22.1667C23.45 24.5 24.5 23.45 24.5 22.1667V7.58333C24.5 7.01167 24.3017 6.49833 23.975 6.09ZM14 11.0833L20.4167 17.5H16.3333V19.8333H11.6667V17.5H7.58333L14 11.0833ZM5.97333 5.83333L6.93 4.66667H20.93L22.015 5.83333H5.97333Z"
                    fill="#5F6884"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_678_10202">
                    <rect width="28" height="28" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div class="globalBackground-no-title">
                {{ backgroundGlobalSetting.imageSetting.url ? '重新上传' : '上传图片' }}
              </div>
            </div>
          </div>
          <div
            class="globalBackground-video globalBackground-setting-content"
            v-if="backgroundGlobalSetting.currentChooseIndex === '3'"
          >
            <div
              class="globalBackground-img-has-container globalBackground-has-container"
              v-show="backgroundGlobalSetting.videoSetting.url"
            >
              <video :src="backgroundGlobalSetting.videoSetting.url"></video>
            </div>
            <div
              class="globalBackground-no-container"
              v-show="!backgroundGlobalSetting.videoSetting.url"
              @click="uploadImg('video')"
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_678_10202)">
                  <path
                    d="M23.975 6.09L22.3533 4.13C22.0267 3.745 21.5483 3.5 21 3.5H7C6.45167 3.5 5.97333 3.745 5.65833 4.14167L4.03667 6.09C3.69833 6.49833 3.5 7.01167 3.5 7.58333V22.1667C3.5 23.45 4.53833 24.5 5.83333 24.5H22.1667C23.45 24.5 24.5 23.45 24.5 22.1667V7.58333C24.5 7.01167 24.3017 6.49833 23.975 6.09ZM14 11.0833L20.4167 17.5H16.3333V19.8333H11.6667V17.5H7.58333L14 11.0833ZM5.97333 5.83333L6.93 4.66667H20.93L22.015 5.83333H5.97333Z"
                    fill="#5F6884"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_678_10202">
                    <rect width="28" height="28" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div class="globalBackground-no-title">
                {{ backgroundGlobalSetting.videoSetting.url ? '重新上传' : '上传视频' }}
              </div>
            </div>
          </div>
          <div class="globalBackground-bg-button-container">
            <div class="globalBackground-bg-button">
              <el-button round :class="setBtnActive('1')" @click="setCurrentIndex('1')">颜色</el-button>
              <el-button round :class="setBtnActive('2')" @click="setCurrentIndex('2')">图片</el-button>
              <el-button round :class="setBtnActive('3')" @click="setCurrentIndex('3')">视频</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="globalBackground-container-bottom">
      <div
        class="global-body-container global-body-choose-color"
        v-show="backgroundGlobalSetting.currentChooseIndex === '1'"
      >
        <div class="global-body-setting globalBackground-body-setting">
          <div class="global-title-name border-bottom">选择颜色</div>
          <div class="global-content">
            <div class="global-list">
              <div
                class="global-list-item"
                v-for="(itemColor, index) in colorMatching.main"
                :key="index"
                @click="setChooseColor('var(--ld-main1)')"
              >
                <div class="global-list-item_left" :style="{ 'background-color': itemColor }"></div>
                <div class="global-list-item_right">
                  <div class="global-list-item-title">主题配色</div>
                  <div class="global-list-item-color">
                    {{ rgbaToHex(itemColor) }},<span class="color-opcity">{{ getAlpha(itemColor) }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="global-body-setting">
          <div class="global-content">
            <div class="global-list">
              <div
                class="global-list-item"
                v-for="(itemColor, index) in colorMatching.Auxiliary"
                :key="index"
                @click="setChooseColor('var(--ld-Auxiliary' + (index + 1) + ')')"
              >
                <div class="global-list-item_left" :style="{ 'background-color': itemColor }"></div>
                <div class="global-list-item_right">
                  <div class="global-list-item-title">辅色{{ index + 1 }}</div>
                  <div class="global-list-item-color">
                    {{ rgbaToHex(itemColor) }},<span class="color-opcity">{{ getAlpha(itemColor) }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="global-body-container global-body-choose-color"
        v-show="backgroundGlobalSetting.currentChooseIndex === '2'"
      >
        <div class="global-body-setting globalBackground-body-setting">
          <div class="global-title-name border-bottom">图片设置</div>
        </div>
        <div class="global-body-setting globalBackground-body-setting">
          <div class="global-content">
            <div class="global-list">
              <div class="globalBackground-list-item">
                <div class="globalBackground-list-item_left">图片透明度</div>
                <div class="globalBackground-list-item_right">
                  <div class="lead-ed-control__select-single_globalBackground">
                    <el-slider
                      v-model="setBackgroundOpcity"
                      class="font-slider"
                      :show-tooltip="false"
                      :min="0"
                      :max="100"
                      :step="1"
                    />
                    <el-input class="lead-ed-img-input" v-model="setBackgroundOpcity" />
                    <div class="lead-btn-unit">%</div>
                  </div>
                </div>
              </div>
              <div class="globalBackground-list-item">
                <div class="globalBackground-list-item_left">图片背景颜色</div>
                <div class="globalBackground-list-item_right">
                  <div
                    class="backgroundBlock"
                    @click="chooseColor('img', backgroundGlobalSetting.imageSetting.background)"
                    :style="{ 'background-color': backgroundGlobalSetting.imageSetting.background }"
                  ></div>
                </div>
              </div>
              <div class="globalBackground-list-item">
                <div class="globalBackground-list-item_left">随页面滚动</div>
                <div class="globalBackground-list-item_right">
                  <el-switch
                    v-model="backgroundGlobalSetting.imageSetting.pageScroll"
                    class="mt-2"
                    style="margin-left: 24px"
                    inline-prompt
                    :active-icon="Check"
                    :inactive-icon="Close"
                  />
                </div>
              </div>
              <div class="globalBackground-list-item">
                <div class="globalBackground-list-item_left">填充方式</div>
                <div class="globalBackground-list-item_right">
                  <el-select
                    v-model="backgroundGlobalSetting.imageSetting.fill"
                    class="m-2 slect-width"
                    popper-class="small-popper-global"
                    placeholder="Select"
                  >
                    <el-option v-for="item in fillList" :key="item.value" :label="item.label" :value="item.value" />
                  </el-select>
                </div>
              </div>
              <div class="globalBackground-list-item">
                <div class="globalBackground-list-item_left">位置</div>
                <div class="globalBackground-list-item_right">
                  <el-form-item class="nice-gong-ge">
                    <el-radio-group v-model="backgroundGlobalSetting.imageSetting.position">
                      <div class="site-item">
                        <el-radio :label="'top left'" border><span></span></el-radio>
                        <el-radio :label="'top center'" border><span></span></el-radio>
                        <el-radio :label="'top right'" border><span></span></el-radio>
                      </div>
                      <div class="site-item">
                        <el-radio :label="'center left'" border><span></span></el-radio>
                        <el-radio :label="'center center'" border><span></span></el-radio>
                        <el-radio :label="'center right'" border><span></span></el-radio>
                      </div>
                      <div class="site-item">
                        <el-radio :label="'bottom left'" border><span></span></el-radio>
                        <el-radio :label="'bottom center'" border><span></span></el-radio>
                        <el-radio :label="'bottom right'" border><span></span></el-radio>
                      </div>
                    </el-radio-group>
                  </el-form-item>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="global-body-container global-body-choose-color"
        v-show="backgroundGlobalSetting.currentChooseIndex === '3'"
      >
        <div class="global-body-setting globalBackground-body-setting">
          <div class="global-title-name border-bottom">视频设置</div>
        </div>
        <div class="global-body-setting globalBackground-body-setting">
          <div class="global-content">
            <div class="global-list">
              <div class="globalBackground-list-item">
                <div class="globalBackground-list-item_left">视频透明度</div>
                <div class="globalBackground-list-item_right">
                  <div class="lead-ed-control__select-single_globalBackground">
                    <el-slider
                      v-model="setVideoOpcity"
                      class="font-slider"
                      :show-tooltip="false"
                      :min="0"
                      :max="100"
                      :step="1"
                    />
                    <el-input class="lead-ed-img-input" v-model="setVideoOpcity" />
                    <div class="lead-btn-unit">%</div>
                  </div>
                </div>
              </div>
              <div class="globalBackground-list-item">
                <div class="globalBackground-list-item_left">视频背景颜色</div>
                <div class="globalBackground-list-item_right">
                  <div
                    class="backgroundBlock"
                    @click="chooseColor('video', backgroundGlobalSetting.videoSetting.background)"
                    :style="{ 'background-color': backgroundGlobalSetting.videoSetting.background }"
                  ></div>
                </div>
              </div>
              <div class="globalBackground-list-item">
                <div class="globalBackground-list-item_left">循环播放</div>
                <div class="globalBackground-list-item_right">
                  <el-switch
                    v-model="backgroundGlobalSetting.videoSetting.isCycle"
                    class="mt-2"
                    style="margin-left: 24px"
                    inline-prompt
                    :active-icon="Check"
                    :inactive-icon="Close"
                  />
                </div>
              </div>
              <div class="globalBackground-list-item">
                <div class="globalBackground-list-item_left">播放速度</div>
                <div class="globalBackground-list-item_right">
                  <el-select
                    v-model="backgroundGlobalSetting.videoSetting.playSpeed"
                    popper-class="small-popper-global"
                    class="m-2 slect-width"
                    placeholder="Select"
                  >
                    <el-option
                      v-for="item in playSpeedList"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </div>
              </div>
              <div class="globalBackground-list-item">
                <div class="globalBackground-list-item_left">位置</div>
                <div class="globalBackground-list-item_right">
                  <el-form-item class="nice-gong-ge">
                    <el-radio-group v-model="backgroundGlobalSetting.videoSetting.position">
                      <div class="site-item">
                        <el-radio :label="'top left'" border><span></span></el-radio>
                        <el-radio :label="'top center'" border><span></span></el-radio>
                        <el-radio :label="'top right'" border><span></span></el-radio>
                      </div>
                      <div class="site-item">
                        <el-radio :label="'center left'" border><span></span></el-radio>
                        <el-radio :label="'center center'" border><span></span></el-radio>
                        <el-radio :label="'center right'" border><span></span></el-radio>
                      </div>
                      <div class="site-item">
                        <el-radio :label="'bottom left'" border><span></span></el-radio>
                        <el-radio :label="'bottom center'" border><span></span></el-radio>
                        <el-radio :label="'bottom right'" border><span></span></el-radio>
                      </div>
                    </el-radio-group>
                  </el-form-item>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="globalBackground-setting-pageSwitch">
      <el-button round @click="handlerSettingPage">应用到其它页面</el-button>
    </div>
    <div v-if="isShowSettingDialog" v-dialogDrag="true">
      <div class="full-screen-dialog" @click="handlerCalcDialog"></div>
      <div class="dialog_content">
        <div class="globalBackground_settingPanel">
          <div class="heading-title dialog_header">
            <div class="left-header-title">应用到其他页面</div>
            <div class="right-header-close" @click="isShowSettingDialog = false">
              <el-icon>
                <CloseBold />
              </el-icon>
            </div>
          </div>
          <div class="heading-body">
            <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange"
              >所有页面</el-checkbox
            >
            <el-checkbox-group v-model="effectivePage" @change="handlecheckedPageEffectChange">
              <el-checkbox
                @change="(isFlag:any) => handlerCheckBox(pageItem,isFlag)"
                v-for="pageItem in pageAllObj"
                :label="pageItem.pageId"
                :disabled="pageItem.pageId === currentPageId"
                :key="pageItem.pageId"
              >
                <div>
                  <div class="pageItem-show check_item" v-if="isCurrentCheck(pageItem.pageId)">
                    <div
                      class="globalBackground-color globalBackground-pageItem"
                      :style="{ 'background-color': backgroundGlobalSetting.colorSeting.color }"
                      v-if="backgroundGlobalSetting.currentChooseIndex === '1'"
                    ></div>
                    <div
                      class="globalBackground-img globalBackground-setting-content globalBackground-pageItem"
                      v-else-if="backgroundGlobalSetting.currentChooseIndex === '2'"
                    >
                      <div
                        class="globalBackground-img-has-container globalBackground-has-container"
                        v-show="backgroundGlobalSetting.imageSetting.url"
                      >
                        <img :src="backgroundGlobalSetting.imageSetting.url" alt="" />
                      </div>
                    </div>
                    <div
                      class="globalBackground-video globalBackground-setting-content globalBackground-pageItem"
                      v-else-if="backgroundGlobalSetting.currentChooseIndex === '3'"
                    >
                      <div
                        class="globalBackground-img-has-container globalBackground-has-container"
                        v-show="backgroundGlobalSetting.videoSetting.url"
                      >
                        <video :src="backgroundGlobalSetting.videoSetting.url"></video>
                      </div>
                    </div>
                  </div>
                  <div class="pageItem-show no_check_item" v-else>
                    <template v-if="getCurrentSettingJson(pageItem)">
                      <div
                        class="globalBackground-color globalBackground-pageItem"
                        :style="{ 'background-color': getCurrentSettingJson(pageItem).colorSeting.color }"
                        v-if="getCurrentSettingJson(pageItem).currentChooseIndex === '1'"
                      ></div>
                      <div
                        class="globalBackground-img globalBackground-setting-content globalBackground-pageItem"
                        v-else-if="getCurrentSettingJson(pageItem).currentChooseIndex === '2'"
                      >
                        <div
                          class="globalBackground-img-has-container globalBackground-has-container"
                          v-show="getCurrentSettingJson(pageItem).imageSetting.url"
                        >
                          <img :src="getCurrentSettingJson(pageItem).imageSetting.url" alt="" />
                        </div>
                      </div>
                      <div
                        class="globalBackground-video globalBackground-setting-content globalBackground-pageItem"
                        v-else-if="getCurrentSettingJson(pageItem).currentChooseIndex === '3'"
                      >
                        <div
                          class="globalBackground-img-has-container globalBackground-has-container"
                          v-show="getCurrentSettingJson(pageItem).videoSetting.url"
                        >
                          <video :src="getCurrentSettingJson(pageItem).videoSetting.url"></video>
                        </div>
                      </div>
                    </template>
                  </div>
                </div>
                <div class="page_title">{{ pageItem.pageTitle }}</div>
              </el-checkbox>
            </el-checkbox-group>
          </div>
          <div class="heading-bottom"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'globalBackground',
};
</script>
<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue';
import {
  getEditor,
  getAlpha,
  rgbaToHex,
  injectGlobalSettingWebsiteView,
  handlCloseOther,
  handlerEffectivePage,
} from '@/utils';
import { getGlobalColorMatching, getGlobalBackground, saveGlobalBackground } from '@/api/setting/index';
import { debounce } from 'underscore';
import { getPageList } from '@/api';
import { Check, Close } from '@element-plus/icons-vue';
import { createDataPic } from '@/utils/databaseInit';
import useDefaultGlobalSetting from '@/components/phoenixComponents/phoenixGlobalSetting/static/defaultGlobalSetting';
import baseDefault from '@/utils/default_extends';
import tomingtu from '@/assets/images/tomingtu.png';
import { closePanel, changeGlobalSettingColor, genderSaveGlobalBackGround, genderStyleTag } from '@/utils';

const { globalBackgroundSetting, globalColorMatchingSetting } = useDefaultGlobalSetting();

// 默认数据
const backgroundGlobalSetting: any = ref(globalBackgroundSetting);

// 生效页面
const effectivePage: any = ref([]);
// 配色
const colorMatching: any = ref(globalColorMatchingSetting);

const isLoadFlag = ref(false);

const isShowSettingDialog = ref(false);

// 当前页面pageid
const currentPageId = ref('');

const fillList = [
  {
    value: 'cover',
    label: '填充',
  },
  {
    value: 'none',
    label: '原始尺寸',
  },
  {
    value: 'contain',
    label: '适应',
  },
];
//
const checkAll = ref(false);
const isIndeterminate = ref(true);
const pageAllObj: any = ref([]);

const playSpeedList = [
  {
    value: 1,
    label: '1 正常',
  },
  {
    value: 2,
    label: '2 倍速',
  },
  {
    value: 3,
    label: '3 倍速',
  },
];

const setBtnActive = computed(() => (index: string) => {
  return backgroundGlobalSetting.value.currentChooseIndex === index ? 'active' : '';
});

const setCurrentIndex = (index: string) => {
  backgroundGlobalSetting.value.currentChooseIndex = index;
};

const setBackgroundOpcity = computed({
  // getter
  get() {
    return backgroundGlobalSetting.value.imageSetting.opcity;
  },
  // setter
  set(newValue: any) {
    // 注意：我们这里使用的是解构赋值语法
    backgroundGlobalSetting.value.imageSetting.opcity = parseFloat(newValue) || 0;
  },
});

const setVideoOpcity = computed({
  // getter
  get() {
    return backgroundGlobalSetting.value.videoSetting.opcity;
  },
  // setter
  set(newValue: any) {
    // 注意：我们这里使用的是解构赋值语法
    backgroundGlobalSetting.value.videoSetting.opcity = parseFloat(newValue) || 0;
  },
});

const initPhotobank = (type?: string) => {
  createDataPic('/photobank/refer/', 1, async (imgs: any) => {
    if (type && type === 'video') {
      const regex = /(mp4|m3u8)$/;
      if (!regex.test(imgs[0]['url'])) {
        ElMessage.error('请上传视频文件');
        return;
      }
      backgroundGlobalSetting.value.videoSetting.url = `${imgs[0]['url']}`;
    } else {
      backgroundGlobalSetting.value.imageSetting.url = `${imgs[0]['url']}`;
    }
    nextTick(() => {});
  });
};
const EmployeeWindow = window as any;
const uploadImg = (type?: string) => {
  initPhotobank(type);
  EmployeeWindow.referFrame.show();
};

const setSettingColor = (type: string, color: string) => {
  if (type) {
    if (type === 'img') {
      backgroundGlobalSetting.value.imageSetting.background = color;
    } else if (type === 'video') {
      backgroundGlobalSetting.value.videoSetting.background = color;
    } else if (type === 'color') {
      backgroundGlobalSetting.value.colorSeting.color = color;
    }
  }
};

const chooseColor = (type: string, itemColor: any) => {
  changeGlobalSettingColor(itemColor);
  const _target: any = event?.currentTarget;

  const _rect = _target.getBoundingClientRect();
  const _resultRect = {
    top: _rect.top,
    left: _rect.left + _rect.width + 20,
  };
  const _editor = getEditor();
  _editor.off('color:update');
  _editor.Commands.run('ColorsPick', _resultRect);
  const updateStyle = (colorKitData: any) => {
    if (colorKitData && colorKitData.color) {
      setSettingColor(type, colorKitData.color);
    }
  };
  _editor.on('color:update', updateStyle);

  event?.preventDefault();
  event?.stopPropagation();
  return false;
};

const setChooseColor = (color: string) => {
  backgroundGlobalSetting.value.colorSeting.color = color;
};

const genderSaveHtml = (pageSettingJson: any) => {
  let savePageHtml = '';
  if (pageSettingJson) {
    const { backgroundStyle, backgroundHtml } = genderSaveGlobalBackGround(pageSettingJson);
    const _pageBackgroundTag = genderStyleTag(backgroundStyle, 'pageBackground_Style');
    savePageHtml = _pageBackgroundTag + backgroundHtml;
  }
  return savePageHtml;
};

const requestSaveGlobalBackground = async (savePageHtml?: any, effectPageList?: any) => {
  const params: any = {
    cssSettingJson: JSON.stringify(backgroundGlobalSetting.value),
  };
  if (savePageHtml || savePageHtml === '') {
    params['savePageHtml'] = savePageHtml;
    params['effectPageList'] = JSON.stringify(effectPageList);
  } else {
    const _saveHtml = genderSaveHtml(backgroundGlobalSetting.value);
    params['savePageHtml'] = _saveHtml;
    params['effectPageList'] = JSON.stringify([currentPageId.value]);
  }
  const result: any = await saveGlobalBackground(params);
  if (result && (result.code == 200 || result.code == 200000)) {
    ElMessage({
      type: 'success',
      message: '操作成功!',
    });
  }
};

const saveGlobalBackgroundDebounce = debounce(() => {
  requestSaveGlobalBackground();
}, 1000);

const handleCheckAllChange = (val: boolean) => {
  let allCkeckId: any = [];
  for (let item of pageAllObj.value) {
    if (item.pageId) {
      allCkeckId.push(item.pageId);
    }
  }

  effectivePage.value = val ? allCkeckId : [currentPageId.value];
  isIndeterminate.value = false;

  // 全部取消选中
  if (!val) {
    // 回滚取消的页面id
    let callBackIdList = allCkeckId;
    const _currentIndex = callBackIdList.indexOf(currentPageId.value);
    if (_currentIndex != -1) {
      callBackIdList.splice(_currentIndex, 1);
    }
    // debugger;
    // 调用回滚的接口
  } else {
    // 全部选中
    const savePageHtml = genderSaveHtml(backgroundGlobalSetting.value);
    requestSaveGlobalBackground(savePageHtml, effectivePage.value);
  }
};
const handlecheckedPageEffectChange = (value: string[]) => {
  // 处理全选按钮
  const checkedCount = value.length;
  checkAll.value = checkedCount === pageAllObj.value.length;
  isIndeterminate.value = checkedCount > 0 && checkedCount < pageAllObj.value.length;
};

const handlerCheckBox = (item: any, isFlag: any) => {
  let pageSettingJson = null;
  let savePageHtml = '';
  const effectPageList = [item.pageId];
  //  选中
  if (isFlag) {
    pageSettingJson = backgroundGlobalSetting.value;
  } else {
    // 取消 使用页面列表返回的json数据 生成html
    if (item && item.globalSettingJson) {
      pageSettingJson = JSON.parse(item.globalSettingJson);
    }
  }
  savePageHtml = genderSaveHtml(pageSettingJson);
  requestSaveGlobalBackground(savePageHtml, effectPageList);
};

/**
 * 是否选中
 */
const isCurrentCheck = computed(() => (pageId: string) => {
  return effectivePage.value.includes(pageId);
});

const getCurrentSettingJson = computed(() => (pageItem: any) => {
  if (pageItem.globalSettingJson) {
    return JSON.parse(pageItem.globalSettingJson);
  }
  return null;
});

watch(
  () => backgroundGlobalSetting.value,
  () => {
    if (isLoadFlag.value) {
      injectGlobalSettingWebsiteView('background', backgroundGlobalSetting.value, colorMatching.value);
      saveGlobalBackgroundDebounce();
    }
  },
  {
    deep: true,
    immediate: true,
  },
);

const addColorMatch = () => {
  if (colorMatching.value.Auxiliary && colorMatching.value.Auxiliary.length < 4) {
    colorMatching.value.Auxiliary.push('#FFFFFF');
  }
};

const getComputerVariableColorVal = computed(() => {
  // debugger
  const val = backgroundGlobalSetting.value.colorSeting.color;
  const isResult = val.match('--ld-(.*)');
  if (isResult) {
    try {
      const _colorVal = isResult[1];
      if (_colorVal) {
        const _varialbeArr = _colorVal.match(/(.+)(\d+)/);
        if (_varialbeArr) {
          let [full, vari, number] = _varialbeArr;
          const _index = parseInt(number) - 1;
          console.log(vari, _index);

          return colorMatching.value[vari][_index];
        }
      }
    } catch (e) {
      console.log(e);
      return val;
    }
  } else {
    if (val) {
      return val;
    } else {
      return 'emptyNot';
    }
  }
});

const requestGlobalColorMatching = async () => {
  const res = await getGlobalColorMatching();
  const data = res.data;
  if (data) {
    colorMatching.value = JSON.parse(data);
  }
};

const requestGlobalBackground = async () => {
  const res = await getGlobalBackground();
  const data = res.data;
  if (data) {
    const resultJson = JSON.parse(data);
    if (resultJson && resultJson.effectivePage) {
      delete resultJson.effectivePage;
    }
    backgroundGlobalSetting.value = resultJson;
  }
  nextTick(() => {
    isLoadFlag.value = true;
  });
};

/**
 * 请求页面列表
 */
const requestPageListData = async () => {
  const res = await getPageList();
  const data = res.data;
  if (data) {
    pageAllObj.value = data;
  }
};

const handlerCalcDialog = () => {
  isShowSettingDialog.value = false;
};

const handlerSettingPage = () => {
  // 生效页面清空
  effectivePage.value = [currentPageId.value];
  // 页面列表清空
  pageAllObj.value = [];
  isShowSettingDialog.value = true;
  requestPageListData();
};

const init = async () => {
  const defaultExtend = new baseDefault();
  currentPageId.value = defaultExtend.settingStore.pageId || '';

  requestGlobalColorMatching();
  requestGlobalBackground();
  requestPageListData();
};

onMounted(() => {
  init();
});
</script>
<style scoped lang="scss">
.full-screen-dialog {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.globalBackground_settingPanel {
  .heading-title {
    border-bottom: 1px solid #ffffff33;
    padding: 12px 16px;
  }

  .dialog_header {
    margin-bottom: 0;
  }

  .heading-body {
    overflow-y: auto;
    max-height: 414px;

    .pageItem-show {
      width: 52px;
      height: 36px;
      min-width: 52px;
      background-color: white;
      margin-right: 8px;

      .globalBackground-pageItem {
        width: 100%;
        height: 100%;
      }
    }

    :deep(.el-checkbox) {
      display: flex;
      height: 50px;
      margin-right: 0;
      padding: 0 16px;
      --el-checkbox-checked-text-color: white;

      .page_title {
        width: 150px;
        overflow: hidden;
        /*文本不会换行*/
        white-space: nowrap;
        /*当文本溢出包含元素时，以省略号表示超出的文本*/
        text-overflow: ellipsis;
      }

      .el-checkbox__label {
        display: flex;
        align-items: center;
      }

      .globalBackground-pageItem {
        display: none;
      }

      &:hover {
        background-color: #008cff;
      }
    }

    :deep(.is-checked) {
      .globalBackground-pageItem {
        display: block;
      }

      .pageItem-show {
        background-color: transparent;
      }
    }

    .globalBackground-has-container {
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      video {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }

  .right-header-close {
    cursor: pointer;
  }
}

.dialog_content {
  width: 290px;
  height: 454px;
  position: fixed;
  z-index: 999;
  bottom: 10px;
  left: 326px;
  padding: 0;
  box-shadow: 4px 4px 20px 0px #00000033;
  background-color: $pageThemeBg;
}

.globalBackground-container {
  position: relative;

  .globalBackground-setting-pageSwitch {
    width: calc(100% - 40px);
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);

    :deep(.el-button) {
      width: 100%;
      --el-button-bg-color: #353e46;
      --el-button-border-color: #353e46;
      --el-button-text-color: white;

      --el-button-hover-bg-color: #353e46;
      --el-button-hover-text-color: white;
      --el-button-hover-border-color: #353e46;
      height: 40px;
    }
  }

  .global-list-item {
    display: flex;
    margin-bottom: 16px;
    cursor: pointer;

    .global-list-item_left {
      width: 86px;
      height: 34px;
      border-radius: 2px;

      margin-right: 8px;
    }

    .global-list-item-title {
      margin-bottom: 4px;
    }
  }

  .global-list-item:last-child {
    margin-bottom: 0;
  }

  .color-opcity {
    margin-left: 3px;
  }

  .global-list-addColor {
    width: 86px;
    height: 34px;
    border: 1.5px dotted white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    font-size: 18px;
  }

  .border-bottom {
    border-bottom: 1px solid #353e46;
    padding-bottom: 12px;
    margin-bottom: 18px;
  }

  .globalBackground-container-top-container {
    position: relative;
    display: flex;
    justify-content: center;

    .globalBackground-bg-container {
      width: 280px;
      height: 160px;
      margin: 20px;

      position: relative;

      .globalBackground-bg-button-container {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 42px;

        display: flex;
        justify-content: center;
        align-items: center;

        background: #0000001a;
      }

      .globalBackground-color {
        cursor: pointer;
        width: 100%;
        height: 100%;

        .globalBackground-color-choose {
          width: 100%;
          height: calc(100% - 40px);
        }
      }
      .globalBackground-color.emptyNot {
        background: url('/src/assets/images/toumingtu.png') no-repeat center 100%;
      }

      .globalBackground-img {
        cursor: pointer;
        width: 100%;
        height: 100%;
      }

      .globalBackground-setting-content {
        position: relative;
        background-color: #ececec;

        &:hover {
          opacity: 0.8;
        }

        &:hover .globalBackground-no-container {
          display: flex !important;
          color: #008cff;
        }

        &:hover .globalBackground-no-container * {
          color: #008cff;
          fill: #008cff;
        }
      }

      .globalBackground-has-container {
        width: 100%;
        height: 100%;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        video {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }

      .globalBackground-no-container {
        width: 100%;
        height: calc(100% - 40px);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        position: absolute;
        left: 0;
        top: 0;

        .globalBackground-no-title {
          font-size: 14px;
          font-weight: 400;
          color: #000000;

          margin-top: 4px;
        }
      }

      .globalBackground-video {
        cursor: pointer;
        width: 100%;
        height: 100%;
      }
    }

    .globalBackground-bg-button {
      display: flex;

      :deep(.el-button) {
        --el-button-text-color: #5f6884;
        height: 26px;
      }

      :deep(.el-button + .el-button) {
        margin-left: 8px;
      }

      :deep(.el-button.active) {
        --el-button-text-color: #008cff;
        border: 1px solid #008cff;
      }
    }
  }

  .globalBackground-container-bottom {
    .globalBackground-body-setting {
      padding: 0 20px;
    }

    .globalBackground-list-item {
      display: flex;
      justify-content: space-between;
      align-items: center;

      margin-bottom: 20px;
    }

    .globalBackground-list-item:last-child {
      margin-bottom: 0;
    }

    .backgroundBlock {
      width: 34px;
      height: 34px;
      border-radius: 4px;

      cursor: pointer;
    }

    .slect-width {
      width: 110px;
      margin: 0px;

      :deep(.el-input__wrapper) {
        border-radius: 4px;
      }
    }

    .nice-gong-ge {
      width: 68px;
      height: 68px;

      .site-item {
        :deep(.el-radio) {
          padding: 0;
          margin-right: 4px;
          margin-bottom: 4px;
          width: 20px;
          height: 20px;
          border-radius: 4px;
          background-color: #353e46;
          border-color: transparent;

          .el-radio__input {
            display: none;
          }

          .el-radio__input.is-checked {
            display: block;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            margin-top: 2px;
          }
        }

        :deep(.el-radio:last-child) {
          margin-right: 0;
        }

        :deep(.el-radio.is-checked) {
          background-color: #409eff;
        }
      }

      :deep(.el-form-item__content) {
        line-height: initial;
      }

      :deep(.el-radio__inner::after) {
        width: 6px;
        height: 6px;
      }
    }
  }
}

.lead-ed-control__select-single_globalBackground {
  display: flex;
  align-items: center;
  width: 100%;

  .select-style {
    width: 34px;
  }

  :deep(.font-slider) {
    width: 100px;
    margin-right: 6px;
  }

  :deep(.el-select__icon) {
    font-size: 12px;
    margin-left: 0;
  }

  :deep(.lead-ed-img-input) {
    width: 40px;
    border-bottom: 1px solid #ffffff33;
    margin-left: 5px;

    .el-input__wrapper {
      background: transparent;
      box-shadow: none !important;
      padding: 0;
    }

    .el-input__inner {
      text-align: center;
    }
  }

  :deep(.select-style) {
    width: 46px;

    .el-input__wrapper {
      background: transparent;
      padding: 0;
      box-shadow: none !important;
    }

    .el-input__inner {
      text-align: center;
    }
  }
}
</style>
