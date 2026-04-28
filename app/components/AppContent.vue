<script setup lang="ts">
import { canSeePaid, canSeePremium } from '~/shared/utils/abilities'
</script>

<template>
	<div class="mt-4 flex items-center justify-center gap-2">
		<div
			class="border border-gray-700 h-60 w-40 flex items-center justify-center bg-gray-800 rounded-2xl"
		>
			Free content
		</div>
		<Can :ability="[canSeePaid]">
			<div
				class="border h-60 w-40 flex items-center justify-center border-green-700 rounded-2xl bg-gray-800"
			>
				Paid
			</div>
		</Can>
		<Cannot :ability="[canSeePaid]">
			<div
				class="border h-60 w-40 flex items-center justify-center border-green-700 rounded-2xl bg-gray-800 text-center p-4"
			>
				Purchase Paid plan to see this block
			</div>
		</Cannot>
		<Can :ability="[canSeePremium]">
			<div
				class="border h-60 w-40 flex items-center justify-center border-yellow-500 rounded-2xl bg-gray-800"
			>
				Premium
			</div>
		</Can>
		<Cannot :ability="[canSeePremium]">
			<div
				class="border h-60 w-40 flex items-center justify-center border-yellow-500 rounded-2xl bg-gray-800 text-center p-4"
			>
				Purchase Premium plan to see this block
			</div>
		</Cannot>
	</div>
</template>
