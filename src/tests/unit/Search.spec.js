import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import Search from "@/components/Search.vue";

vi.mock("vuex", () => ({
  mapActions: vi.fn(),
}));

describe("Search.vue", () => {
  it("renders correctly", () => {
    const wrapper = mount(Search);
    expect(wrapper.element).toMatchSnapshot();
  });

  it("calls fetchWeatherData when search is triggered", async () => {
    const fetchWeatherDataMock = vi.fn();
    vi.mocked(vi.fn()).mapActions.mockReturnValue({
      fetchWeatherData: fetchWeatherDataMock,
    });

    const wrapper = mount(Search);
    wrapper.vm.$emit("input", "test");
    await wrapper.vm.$nextTick();

    expect(fetchWeatherDataMock).toHaveBeenCalledWith("test");
  });
});
