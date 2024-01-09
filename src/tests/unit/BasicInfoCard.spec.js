import { describe, it, expect, vi } from "vitest";
import { createLocalVue, mount } from "@vue/test-utils";
import BasicInfoCard from "@/components/BasicInfoCard.vue";
import { JSDOM } from "jsdom";

// Setup a basic DOM using jsdom
const dom = new JSDOM("<!DOCTYPE html><html><body></body></html>");
global.document = dom.window.document;

describe("BasicInfoCard.vue", () => {
  it("renders correctly", () => {
    const wrapper = mount(BasicInfoCard, {
      propsData: {
        icon: "/path/to/icon.svg",
        title: "Test Title",
        value: 25,
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
