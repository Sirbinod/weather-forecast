import { describe, it, expect, vi } from "vitest";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import Home from "@/views/Home.vue";
import { JSDOM } from "jsdom";

// Setup a basic DOM using jsdom
const dom = new JSDOM("<!DOCTYPE html><html><body></body></html>");
global.document = dom.window.document;

vi.mock("vuex", () => ({
  mapState: vi.fn(),
  mapActions: vi.fn(),
}));

describe("Home.vue", () => {
  it("renders correctly", async () => {
    const wrapper = shallowMount(Home);
    await wrapper.vm.$nextTick(); // Wait for async operations
    expect(wrapper.element).toMatchSnapshot(); // Snapshot testing
  });

  it("fetches weather data on mount", async () => {
    const fetchWeatherDataMock = vi.fn();
    const mapActions = vi.mocked(vi.fn());
    mapActions.mockReturnValue({
      fetchWeatherData: fetchWeatherDataMock,
    });

    vi.mocked(vi.fn()).mockReturnValue(mapActions);

    const wrapper = shallowMount(Home);
    await wrapper.vm.$nextTick(); // Wait for async operations

    expect(fetchWeatherDataMock).toHaveBeenCalledWith("kathmandu");
  });
});
