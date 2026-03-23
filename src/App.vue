<template>
  <VApp>
    <VMain class="pa-4">
      <VContainer class="d-flex flex-column gr-4">
        <VBtn
          :icon="theme.name.value === 'light' ? '$colorThemeDark' : '$colorThemeLight'"
          @click="theme.change(theme.name.value === 'light' ? 'dark' : 'light')"
        />
        <VCard>
          <VCardTitle>カードのタイトル</VCardTitle>
          <VCardSubtitle>カードのサブタイトル</VCardSubtitle>
          <VCardText>カードの内容</VCardText>
          <VCardActions>
            <VBtn>アクション1</VBtn>
            <VBtn>アクション2</VBtn>
          </VCardActions>
        </VCard>
        <VSheet>シートの内容</VSheet>
        <VSheet class="d-flex flex-column gr-4">
          <VList>
            <VListItem prepend-icon="$web">
              <VListItemTitle>リストアイテム1</VListItemTitle>
              <VListItemSubtitle>サブタイトル1</VListItemSubtitle>
            </VListItem>
            <VListItem prepend-icon="$web">
              <VListItemTitle>リストアイテム2</VListItemTitle>
              <VListItemSubtitle>サブタイトル2</VListItemSubtitle>
            </VListItem>
          </VList>
          <VTable>
            <thead>
              <tr>
                <th>ヘッダー1</th>
                <th>ヘッダー2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>データ1</td>
                <td>データ2</td>
              </tr>
              <tr>
                <td>データ3</td>
                <td>データ4</td>
              </tr>
            </tbody>
          </VTable>
          <VTextField />
          <VTextarea />
        </VSheet>
      </VContainer>
    </VMain>
  </VApp>
</template>

<script lang="ts" setup>
import { useTheme } from 'vuetify';
const theme = useTheme();
theme.change('light');
</script>
